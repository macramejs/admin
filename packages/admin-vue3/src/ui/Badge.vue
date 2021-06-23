<template>
    <component
        :is="tag"
        class="inline-flex items-center justify-center px-2 text-sm rounded-xs"
        :class="{
            'bg-blue text-white ': getVariant == 'blue',
            'bg-gray-700  text-white': getVariant == 'gray',
            'bg-green  text-green-700': getVariant == 'green',
            'bg-red  text-red-700': getVariant == 'red',
            'bg-yellow  text-yellow-700': getVariant == 'yellow',
        }"
    >
        <slot />
    </component>
</template>

<script>
import { defineComponent } from 'vue';
import { getVariant, variants } from './props/variant';

export default defineComponent({
    props: {
        ...variants,
    },
    setup(props, { attrs }) {
        const tag = 'href' in attrs ? 'a' : 'div';
        const getVariant = getVariant(props);

        return { tag, getVariant };
    },
});
</script>
