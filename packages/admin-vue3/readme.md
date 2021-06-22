# Macrame Admin Theme (Vue3)

```js
const merge = require('lodash.merge');
const tailwindConfig = require('@macramejs/theme-admin-vue3/tailwind.config.js');

module.exports = merge(tailwindConfig, {
    purge: [
        // ...
    ],
    theme: {
        // ...
    }
});

```
