import ts from 'rollup-plugin-typescript2';
import vue from 'rollup-plugin-vue';
import styles from 'rollup-plugin-styles';
import replace from '@rollup/plugin-replace';
import path from 'path';
const fs = require('fs');

const packagesDir = path.resolve(__dirname, 'packages');
const packageDir = path.resolve(packagesDir, process.env.TARGET);
const resolve = (p) => path.resolve(packageDir, p);
const pkg = require(resolve(`package.json`));
const packageOptions = pkg.buildOptions || {};
const name = packageOptions.filename || path.basename(packageDir);

const outputConfigs = {
    cjs: {
        file: resolve(`dist/${name}.cjs.js`),
        format: 'cjs',
    },
    'esm-bundle': {
        file: resolve(`dist/${name}.esm-bundler.js`),
        format: 'es',
    },
};

const packageFormats = Object.keys(outputConfigs);

const packageConfigs = packageFormats.map((format) =>
    createConfig(format, outputConfigs[format])
);

packageFormats.forEach((format) => {
    if (format === 'cjs') {
        packageConfigs.push(createProductionConfig(format));
    }
});

export default packageConfigs;

function createConfig(format, output, plugins = []) {
    let entryFile = `src/index.ts`;
    const isProductionBuild = /\.prod\.js$/.test(output.file);
    const isVuePackage = name == 'admin-vue3';

    const shouldEmitDeclarations = false;

    output.sourcemap = !!process.env.SOURCE_MAP;
    output.externalLiveBindings = false;

    const tsPlugin = ts({
        tsconfig: resolve('tsconfig.json'),
        check: process.env.NODE_ENV === 'production',
        tsconfigOverride: {
            compilerOptions: {
                sourceMap: output.sourcemap,
                declaration: shouldEmitDeclarations,
                declarationMap: shouldEmitDeclarations,
            },
            exclude: ['**/__tests__', 'test-dts'],
        },
    });

    
    const extractClassesPlugin = () => {
        let candidates = {};

        let ignore = ['import', 'vue', 'props'];
        let illegalChars = ['.', ';', '/', '_', ',', '=', '*', '{', '}', '?', '!','\\', '(', ')', '||', '&', '$'];

        const isCandidate = (str) => {
            return !illegalChars.some((m) => str.includes(m))
                && !ignore.includes(str)
                && isNaN(str)
                // no upper case letters
                && ![...str].some((c) => c != c.toLowerCase())
                && str != '';
        }

        return {
            name: 'extract-classes',
            async transform(code, id) {
                let broadMatches = code.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
                let innerMatches = code.match(/[^<>"'`\s.(){}[\]#=%]*[^<>"'`\s.(){}[\]#=%:]/g) || []
                for (let match of [...broadMatches, ...innerMatches]) {
                    if(isCandidate(match)) {
                        // console.log(match);
                        candidates[match] = true;
                    }
                }

                
            },
            writeBundle(options, bundle) {
                if(!options.file.includes('admin-vue3')) {
                    return;
                }

                fs.writeFile('./packages/admin-vue3/dist/classes.js', `exports.classes = ${JSON.stringify(Object.keys(candidates))};`, err => {
                    if (err) console.error(err);
                });
            }
        }
    };

    if (isVuePackage) {
        plugins.push(
            vue({
                css: null,
            })
        );
        plugins.push(styles());
    }

    return {
        input: resolve(entryFile),
        plugins: [extractClassesPlugin(), tsPlugin, createReplacePlugin(isProductionBuild), ...plugins],
        output,
    };
}

function createReplacePlugin(isProduction) {
    const replacements = {
        __DEV__: !isProduction,
    };

    Object.keys(replacements).forEach((key) => {
        if (key in process.env) {
            replacements[key] = process.env[key];
        }
    });

    return replace({
        // @ts-ignore
        values: replacements,
        preventAssignment: true,
    });
}

function createProductionConfig(format) {
    return createConfig(format, {
        file: resolve(`dist/${name}.${format}.prod.js`),
        format: outputConfigs[format].format,
    });
}

function createMinifiedConfig(format) {
    const { terser } = require('rollup-plugin-terser');

    return createConfig(
        format,
        {
            file: outputConfigs[format].file.replace(/\.js$/, '.prod.js'),
            format: outputConfigs[format].format,
        },
        [
            terser({
                module: /^esm/.test(format),
                compress: {
                    ecma: 2015,
                    pure_getters: true,
                },
                safari10: true,
            }),
        ]
    );
}
