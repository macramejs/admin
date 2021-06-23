import { computed } from 'vue';

export function getVariant(props) {
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

    return {
        comp_variant,
    };
}

export const variants = {
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
};
