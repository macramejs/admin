<template>
    <component
        :is="tag"
        class="inline-flex items-center justify-center focus:outline-none"
        :class="{
            'focus:ring': !text && !disabled,

            'text-lg': comp_size == 'lg',
            'text-base': comp_size == 'md',
            'text-xs': comp_size == 'sm',

            'w-12': square && comp_size == 'lg',
            'w-10': square && comp_size == 'md',
            'w-7': square && comp_size == 'sm',

            'h-12  rounded-lg': comp_size == 'lg' && !text,
            'h-10  rounded-md': comp_size == 'md' && !text,
            'h-7  rounded-sm': comp_size == 'sm' && !text,

            'px-6': comp_size == 'lg' && !square && !text,
            'px-5': comp_size == 'md' && !square && !text,
            'px-4': comp_size == 'sm' && !square && !text,

            'bg-gray-300 text-gray-600 cursor-default':
                disabled && !outline && !text,

            'bg-blue hover:bg-blue-700 active:bg-blue-800 text-white focus:ring-blue-400 shadow':
                comp_variant == 'blue' && !outline && !text && !disabled,
            'bg-white hover:bg-blue-100 active:bg-blue-300 text-blue hover:text-blue-600 active:text-blue-700 border border-blue focus:ring-blue-400':
                comp_variant == 'blue' && outline && !text && !disabled,
            'text-blue hover:text-blue-700 active:text-blue-900 border-b border-blue':
                comp_variant == 'blue' && text && !disabled,

            'bg-gray-700 hover:bg-gray-800 active:bg-gray-900 focus:ring-gray-400 text-white':
                comp_variant == 'gray' && !outline && !text && !disabled,
            'bg-white hover:bg-gray-300 active:bg-gray-500 border border-gray-700 text-gray-700 focus:ring-gray-400':
                comp_variant == 'gray' && outline && !text && !disabled,
            'text-gray hover:text-gray-700 active:text-gray-900 border-b border-gray':
                comp_variant == 'gray' && text && !disabled,

            'bg-green hover:bg-green-700 active:bg-green-800 focus:ring-green-400 text-white':
                comp_variant == 'green' && !outline && !text && !disabled,
            'bg-white hover:bg-green-100 active:bg-green-300 text-green hover:text-green-600 active:text-green-700 border border-green focus:ring-green-400':
                comp_variant == 'green' && outline && !text && !disabled,
            'text-green hover:text-green-700 active:text-green-900 border-b border-green':
                comp_variant == 'green' && text && !disabled,

            'bg-red hover:bg-red-500 active:bg-red-600 focus:ring-red-400 text-white':
                comp_variant == 'red' && !outline && !text && !disabled,
            'bg-white hover:bg-red-100 active:bg-red-300 text-red hover:text-red-600 active:text-red-700 border border-red focus:ring-red-400':
                comp_variant == 'red' && outline && !text && !disabled,
            'text-red hover:text-red-700 active:text-red-900 border-b border-red':
                comp_variant == 'red' && text && !disabled,

            'bg-yellow hover:bg-yellow-700 active:bg-yellow-800 focus:ring-yellow-400 text-white':
                comp_variant == 'yellow' && !outline && !text && !disabled,
            'bg-white hover:bg-yellow-100 active:bg-yellow-300 text-yellow hover:text-yellow-600 active:text-yellow-700 border border-yellow focus:ring-yellow-400':
                comp_variant == 'yellow' && outline && !text && !disabled,
            'text-yellow hover:text-yellow-700 active:text-yellow-900 border-b border-yellow':
                comp_variant == 'yellow' && text && !disabled,
        }"
    >
        <slot />
    </component>
</template>

<script>
import { computed, defineComponent } from 'vue';

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
            type: String,
            default: null,
        },
        blue: {
            type: Boolean,
            default: false,
        },
        gray: {
            type: Boolean,
            default: false,
        },
        green: {
            type: Boolean,
            default: false,
        },
        yellow: {
            type: Boolean,
            default: false,
        },
        red: {
            type: Boolean,
            default: false,
        },
        size: {
            default: null,
            type: String,
        },
        sm: {
            type: Boolean,
            default: false,
        },
        md: {
            type: Boolean,
            default: false,
        },
        lg: {
            type: Boolean,
            default: false,
        },
    },
    setup(props, { attrs }) {
        const tag = 'href' in attrs ? 'a' : 'button';

        const comp_variant = computed(() => {
            if (props.variant) {
                return props.variant;
            }

            if (props.blue) {
                return 'blue';
            }
            if (props.gray) {
                return 'gray';
            }
            if (props.green) {
                return 'green';
            }
            if (props.yellow) {
                return 'yellow';
            }
            if (props.red) {
                return 'red';
            }

            return 'blue';
        });

        const comp_size = computed(() => {
            if (props.size) {
                return props.size;
            }

            if (props.sm) {
                return 'sm';
            }
            if (props.md) {
                return 'md';
            }
            if (props.lg) {
                return 'lg';
            }

            return 'lg';
        });

        return { tag, comp_variant, comp_size };
    },
});
</script>
