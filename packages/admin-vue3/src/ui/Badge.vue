<template>
    <component
        :is="tag"
        class="inline-flex items-center justify-center px-2 text-sm rounded-xs"
        :class="{
            'bg-blue text-white ': comp_variant == 'blue',
            'bg-gray-700  text-white': comp_variant == 'gray',
            'bg-green  text-green-700': comp_variant == 'green',
            'bg-red  text-red-700': comp_variant == 'red',
            'bg-yellow  text-yellow-700': comp_variant == 'yellow',
        }"
    >
        <slot />
    </component>
</template>

<script>
import { defineComponent } from 'vue';
import { getVariant, variants } from './variant';

export default defineComponent({
    props: {
        ...variants,
    },
    setup(props, { attrs }) {
        const tag = 'href' in attrs ? 'a' : 'div';

        const { comp_variant } = getVariant(props);

        return { tag, comp_variant };
    },
});
</script>
