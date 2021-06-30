<template>
    <div class="flex" :class="{ 'flex-col': stacked }">
        <Checkbox
            v-for="(option, index) in options"
            :key="index"
            :modelValue="checked(option)"
            @update:modelValue="handleUpdate(option)"
            :size="size_"
            :variant="variant_"
        >
            {{ label(option) }}
        </Checkbox>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { options, optionValue, optionLabel, isDisabled } from './props/options';
import { getSize, sizes } from './props/size';
import { getVariant, variants } from './props/variant';
import Checkbox from './Checkbox.vue';
const xor = require('lodash.xor');

export default defineComponent({
    components: { Checkbox },
    props: {
        modelValue: {
            type: Array,
            default: null,
        },
        stacked: {
            type: Boolean,
            default: false,
        },
        ...options,
        ...sizes,
        ...variants,
    },
    setup(props, { emit }) {
        const size_ = getSize(props, {});
        const variant_ = getVariant(props, {});

        const checked = (option) => props.modelValue.includes(value(option));
        const value = (option) => optionValue(props, option);
        const label = (option) => optionLabel(props, option);
        const disabled = (option) => isDisabled(props, option);

        const handleUpdate = (option) => {
            emit('update:modelValue', xor(props.modelValue, [value(option)]));
        };

        return {
            size_,
            variant_,
            checked,
            value,
            label,
            disabled,
            handleUpdate,
        };
    },
});
</script>
