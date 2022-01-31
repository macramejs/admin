<template>
    <component
        :is="tag"
        class="inline-flex items-center justify-center px-2 text-sm rounded-xs"
        :class="{
            'bg-gradient-to-r from-red-500 to-orange-500 text-white ':
                variant_ == 'primary',
            'bg-gray-800 text-white': variant_ == 'gray',
            'bg-darkorange text-white':
                variant_ == 'darkorange' || variant_ == 'orange',
            'bg-lightorange text-white': variant_ == 'lightorange',
            'bg-grasgreen text-white':
                variant_ == 'grasgreen' || variant_ == 'green',
            'bg-turkise text-white': variant_ == 'turkise',
            'bg-lightblue text-gray-800': variant_ == 'lightblue',
            'bg-blue text-white': variant_ == 'blue',
            'bg-purple text-white': variant_ == 'purple',
            'bg-pink text-gray-800': variant_ == 'pink',
        }"
    >
        <slot />
    </component>
</template>

<script lang="ts">
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
