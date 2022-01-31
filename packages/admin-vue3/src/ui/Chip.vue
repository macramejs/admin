<template>
    <button
        @click="update(!modelValue)"
        class="h-[30px] px-3 py-2 transition-colors focus:outline-none duration-200 rounded-full leading-none text-sm"
        :class="{
            'bg-gray-200 hover:bg-gray-400 text-gray-900 focus:bg-gray-300 active:bg-orange-100':
                !modelValue && !disabled,
            'bg-orange-100 text-orange-700': modelValue && !disabled,
            'bg-gray-100 text-gray-500 cursor-not-allowed': disabled,
        }"
        :disabled="disabled"
    >
        {{ label }}
    </button>
</template>

<script lang="ts">
import { ref } from 'vue';
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue';
import { getSize, sizes } from './props/size';
import { getVariant, variants } from './props/variant';

export default {
    components: { Switch, SwitchGroup, SwitchLabel },
    props: {
        label: {
            type: String,
            default: null,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        modelValue: {
            type: Boolean,
            default: false,
        },
    },

    setup({ disabled }, { emit }) {
        const update = value => {
            if (disabled) {
                return;
            }
            emit('update:modelValue', value);
        };

        return { update };
    },
};
</script>
