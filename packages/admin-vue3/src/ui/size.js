import { computed } from 'vue';

export function getSize(props) {
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

        return 'md';
    });

    return {
        comp_variant,
    };
}

export const sizes = {
    size: {
        type: String,
        default: null,
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
};
