const tailwindConfig = require('@macramejs/admin-config');

module.exports = {
    ...tailwindConfig,
    purge: [__dirname+'/ui/**/*.vue'],
    variants: {
        extend: {
            backgroundColor: ['active'],
            textColor: ['active']
        }
    },
};
