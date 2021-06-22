<template>
    <button
        class="h-[40px] text-center rounded-xl"
        :class="{
            'w-[40px]': square,
            'border-grey-700 hover:bg-grey-700 text-grey-700 hover:text-white':
                variant == 'secondary' && outline,
            border: outline,
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
            default: 'primary',
            type: String,
        },
    },
});
</script>
