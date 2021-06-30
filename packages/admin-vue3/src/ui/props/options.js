export function optionValue(props, option) {
    if (props.valueKey === null) {
        return option;
    }

    return option[props.valueKey];
}

export function optionLabel(props, option) {
    if (props.labelKey === null) {
        return option;
    }

    return option[props.labelKey];
}

export function isDisabled(props, option) {
    if (props.disabledKey === null) {
        return false;
    }

    return option[props.disabledKey] == true;
}

export const options = {
    labelKey: {
        type: String,
        default: null,
    },
    valueKey: {
        type: String,
        default: null,
    },
    disabledKey: {
        type: String,
        default: null,
    },
    options: {
        type: Array,
        default: () => [],
    },
};
