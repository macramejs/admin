<template>
    <component
        :is="tag"
        class="inline-flex justify-center items-center px-2 rounded-xs text-sm"
        :class="{
            'bg-blue text-white ':
                variant == 'blue' && !outline && !text && !disabled,

            'bg-gray-700  text-white':
                variant == 'gray' && !outline && !text && !disabled,

            'bg-green  text-green-700':
                variant == 'green' && !outline && !text && !disabled,

            'bg-red  text-red-700':
                variant == 'red' && !outline && !text && !disabled,

            'bg-yellow  text-yellow-700':
                variant == 'yellow' && !outline && !text && !disabled,
        }"
    >
        <slot />
    </component>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        variant: {
            default: 'blue',
            type: String,
        },
    },
    setup(props, { attrs }) {
        const tag = 'href' in attrs ? 'a' : 'div';

        return { tag };
    },
});
</script>
