<template>
    <component
        :is="tag"
        class="inline-flex justify-center items-center px-2 rounded-xs text-sm"
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

export default defineComponent({
    props: {
        variant: {
            default: 'blue',
            type: String,
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
    },
    setup(props, { attrs }) {
        const tag = 'href' in attrs ? 'a' : 'div';

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

        return { tag, comp_variant };
    },
});
</script>
