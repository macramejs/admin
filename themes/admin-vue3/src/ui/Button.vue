<template>
    <button
        class="h-[40px] text-center btn"
        :class="{
            'w-12': square && size == 'lg',
            'w-10': square && size == 'md',
            'w-13': square && size == 'sm',

            'h-12 rounded-lg': size == 'lg',
            'h-10 rounded-md': size == 'md',
            'h-13 rounded-sm': size == 'sm',

            'bg-blue hover:bg-blue-700 text-white shadow':
                variant == 'blue' && !outline,
            'bg-white hover:bg-blue-300 border border-blue text-blue hover:text-white':
                variant == 'blue' && outline,

            'bg-gray-700 hover:bg-blue-800 text-white':
                variant == 'gray' && !outline,
            'bg-white hover:bg-gray-300 border border-blue text-gray-700 hover:text-white':
                variant == 'gray' && outline,
        }"
    >
        <slot />
    </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
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
