<template>
    <component
        :is="tag"
        class="inline-flex items-center justify-center px-2 text-sm rounded-xs"
        :class="{
            'bg-blue text-white ': variant_ == 'blue',
            'bg-gray-700 text-white': variant_ == 'gray',
            'bg-green text-green-700': variant_ == 'green',
            'bg-red text-red-700': variant_ == 'red',
            'bg-yellow text-yellow-700': variant_ == 'yellow',
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
        const variant_ = getVariant(props, {});

        return { tag, variant_ };
    },
});
</script>
