<template>
    <component
        :is="tag"
        class="inline-flex items-center justify-center focus:outline-none"
        :class="{
            'focus:ring': !text && !disabled,

            'text-lg': getSize == 'lg',
            'text-base': getSize == 'md',
            'text-xs': getSize == 'sm',

            'w-12': square && getSize == 'lg',
            'w-10': square && getSize == 'md',
            'w-7': square && getSize == 'sm',

            'h-12  rounded-lg': getSize == 'lg' && !text,
            'h-10  rounded-md': getSize == 'md' && !text,
            'h-7  rounded-sm': getSize == 'sm' && !text,

            'px-6': getSize == 'lg' && !square && !text,
            'px-5': getSize == 'md' && !square && !text,
            'px-4': getSize == 'sm' && !square && !text,

            'bg-gray-300 text-gray-600 cursor-default':
                disabled && !outline && !text,

            'bg-blue hover:bg-blue-700 active:bg-blue-800 text-white focus:ring-blue-400 shadow':
                getVariant == 'blue' && !outline && !text && !disabled,
            'bg-white hover:bg-blue-100 active:bg-blue-300 text-blue hover:text-blue-600 active:text-blue-700 border border-blue focus:ring-blue-400':
                getVariant == 'blue' && outline && !text && !disabled,
            'text-blue hover:text-blue-700 active:text-blue-900 border-b border-blue':
                getVariant == 'blue' && text && !disabled,

            'bg-gray-700 hover:bg-gray-800 active:bg-gray-900 focus:ring-gray-400 text-white':
                getVariant == 'gray' && !outline && !text && !disabled,
            'bg-white hover:bg-gray-300 active:bg-gray-500 border border-gray-700 text-gray-700 focus:ring-gray-400':
                getVariant == 'gray' && outline && !text && !disabled,
            'text-gray hover:text-gray-700 active:text-gray-900 border-b border-gray':
                getVariant == 'gray' && text && !disabled,

            'bg-green hover:bg-green-700 active:bg-green-800 focus:ring-green-400 text-white':
                getVariant == 'green' && !outline && !text && !disabled,
            'bg-white hover:bg-green-100 active:bg-green-300 text-green hover:text-green-600 active:text-green-700 border border-green focus:ring-green-400':
                getVariant == 'green' && outline && !text && !disabled,
            'text-green hover:text-green-700 active:text-green-900 border-b border-green':
                getVariant == 'green' && text && !disabled,

            'bg-red hover:bg-red-500 active:bg-red-600 focus:ring-red-400 text-white':
                getVariant == 'red' && !outline && !text && !disabled,
            'bg-white hover:bg-red-100 active:bg-red-300 text-red hover:text-red-600 active:text-red-700 border border-red focus:ring-red-400':
                getVariant == 'red' && outline && !text && !disabled,
            'text-red hover:text-red-700 active:text-red-900 border-b border-red':
                getVariant == 'red' && text && !disabled,

            'bg-yellow hover:bg-yellow-700 active:bg-yellow-800 focus:ring-yellow-400 text-white':
                getVariant == 'yellow' && !outline && !text && !disabled,
            'bg-white hover:bg-yellow-100 active:bg-yellow-300 text-yellow hover:text-yellow-600 active:text-yellow-700 border border-yellow focus:ring-yellow-400':
                getVariant == 'yellow' && outline && !text && !disabled,
            'text-yellow hover:text-yellow-700 active:text-yellow-900 border-b border-yellow':
                getVariant == 'yellow' && text && !disabled,
        }"
    >
        <slot />
    </component>
</template>

<script>
import { defineComponent } from 'vue';
import { getVariant, variants } from './props/variant';
import { getSize, sizes } from './props/size';

export default defineComponent({
    props: {
        disabled: {
            default: false,
            type: Boolean,
        },
        text: {
            default: false,
            type: Boolean,
        },
        square: {
            default: false,
            type: Boolean,
        },
        outline: {
            default: false,
            type: Boolean,
        },
        ...variants,
        ...sizes,
    },
    setup(props, { attrs }) {
        const tag = 'href' in attrs ? 'a' : 'button';
        const getVariant = getVariant(props);
        const getSize = getSize(props);

        return { tag, getVariant, getSize };
    },
});
</script>
