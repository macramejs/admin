const tailwindConfig = require('@macramejs/admin-config');

module.exports = {
    ...tailwindConfig,
    purge: [__dirname + '/ui/**/*.ts', __dirname + '/ui/**/*.js'],
};
