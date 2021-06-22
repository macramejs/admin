<template>
    <button
        class="text-center btn focus:outline-none"
        :class="{
            'focus:ring': !text && !outline,

            'w-12': square && size == 'lg',
            'w-10': square && size == 'md',
            'w-13': square && size == 'sm',

            'h-12 px-6 rounded-lg': size == 'lg',
            'h-10 px-5 rounded-md': size == 'md',
            'h-13 px-4 rounded-sm': size == 'sm',

            'bg-blue hover:bg-blue-700 active:bg-blue-800 text-white focus:border-blue-200 shadow':
                (variant == 'blue' && !outline),
            'bg-white hover:bg-blue-100 active:bg-blue-300 text-blue hover:text-blue-600 active:text-blue-700 border border-blue':
                (variant == 'blue' && outline),

            'bg-gray-700 hover:bg-blue-800 focus:border-blue-200 text-white':
                variant == 'gray' && !outline,
            'bg-white hover:bg-gray-300 border border-blue text-gray-700':
                variant == 'gray' && outline,

            'bg-green hover:bg-green-700 active:bg-green-800 focus:border-green-200 text-white':
                variant == 'green' && !outline,
            'bg-white hover:bg-green-100 active:bg-green-300 text-green hover:text-green-600 active:text-green-700 border border-green':
                variant == 'green' && outline,

            'bg-red hover:bg-red-700 active:bg-red-800 focus:border-red-200 text-white':
                variant == 'red' && !outline,
            'bg-white hover:bg-red-100 active:bg-red-300 text-red hover:text-red-600 active:text-red-700 border border-red':
                variant == 'red' && outline,

            'bg-yellow hover:bg-yellow-700 active:bg-yellow-800 focus:border-yellow-200 text-white':
                variant == 'yellow' && !outline,
            'bg-white hover:bg-yellow-100 active:bg-yellow-300 text-yellow hover:text-yellow-600 active:text-yellow-700 border border-yellow':
                variant == 'yellow' && outline,
        }"
    >
        <slot />
    </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
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
});
</script>
