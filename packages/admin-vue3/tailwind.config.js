const tailwindConfig = require('@macramejs/theme-admin-config');

module.exports = {
    ...tailwindConfig,
    purge: [__dirname+'/ui/**/*.vue'],
};
