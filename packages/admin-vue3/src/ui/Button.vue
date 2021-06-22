<template>
    <component
        :is="tag"
        class="text-center btn focus:outline-none"
        :class="{
            'focus:ring': !text && !outline && !disabled,

            'w-12': square && size == 'lg',
            'w-10': square && size == 'md',
            'w-13': square && size == 'sm',

            'h-12 px-6 rounded-lg': size == 'lg',
            'h-10 px-5 rounded-md': size == 'md',
            'h-13 px-4 rounded-sm': size == 'sm',

            'bg-gray-300 text-gray-600 cursor-default': disabled && !outline && !text,

            'bg-blue hover:bg-blue-700 active:bg-blue-800 text-white focus:border-blue-200 shadow':
                variant == 'blue' && !outline && !text && !disabled,
            'bg-white hover:bg-blue-100 active:bg-blue-300 text-blue hover:text-blue-600 active:text-blue-700 border border-blue':
                variant == 'blue' && outline && !text  && !disabled,
            'text-blue hover:text-blue-700 active:text-blue-900 underline': 
                variant == 'blue' && text  && !disabled,

            'bg-gray-700 hover:bg-gray-800 active:bg-gray-900 focus:border-blue-200 text-white':
                variant == 'gray' && !outline && !text && !disabled,
            'bg-white hover:bg-gray-300 active:bg-gray-500 border border-gray-700 text-gray-700':
                variant == 'gray' && outline && !text && !disabled,
            'text-gray hover:text-gray-700 active:text-gray-900 underline': 
                variant == 'gray' && text  && !disabled,

            'bg-green hover:bg-green-700 active:bg-green-800 focus:border-green-200 text-white':
                variant == 'green' && !outline && !text && !disabled,
            'bg-white hover:bg-green-100 active:bg-green-300 text-green hover:text-green-600 active:text-green-700 border border-green':
                variant == 'green' && outline && !text && !disabled,
            'text-green hover:text-green-700 active:text-green-900 underline': 
                variant == 'green' && text  && !disabled,

            'bg-red hover:bg-red-700 active:bg-red-800 focus:border-red-200 text-white':
                variant == 'red' && !outline && !text && !disabled,
            'bg-white hover:bg-red-100 active:bg-red-300 text-red hover:text-red-600 active:text-red-700 border border-red':
                variant == 'red' && outline && !text && !disabled,
            'text-red hover:text-red-700 active:text-red-900 underline': 
                variant == 'red' && text && !disabled,

            'bg-yellow hover:bg-yellow-700 active:bg-yellow-800 focus:border-yellow-200 text-white':
                variant == 'yellow' && !outline && !text && !disabled,
            'bg-white hover:bg-yellow-100 active:bg-yellow-300 text-yellow hover:text-yellow-600 active:text-yellow-700 border border-yellow':
                variant == 'yellow' && outline && !text && !disabled,
            'text-yellow hover:text-yellow-700 active:text-yellow-900 underline': 
                variant == 'yellow' && text && !disabled
        }"
    >
        <slot />
    </component>
</template>

<script>
import { defineComponent } from 'vue';

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
        variant: {
            default: 'blue',
            type: String,
        },
        size: {
            default: 'md',
            type: String,
        },
    },
    setup(props, { attrs }) {
        const tag = 'href' in attrs ? 'a' : 'button';

        return { tag };
    }
});
</script>
