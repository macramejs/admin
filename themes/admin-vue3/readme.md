# Macrame Admin Theme (Vue3)

```js
import { merge } from 'lodash.merge';
const { tailwindConfig } = require('@macramejs/theme-admin-vue3');

module.exports = merge(tailwindConfig, {
    theme: {
        // ... my own
    },
    // ...
});
```
