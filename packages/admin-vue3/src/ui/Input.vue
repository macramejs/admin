<template>
    <div class="relative">
        <span
            v-if="label"
            class="absolute inline-block transition-all duration-200 -translate-y-1/2 pointer-events-none bg-"
            :class="{
                'top-1/2 left-[18px] text-gray-500':
                    $attrs.modelValue?.length == 0 || !$attrs.modelValue,
                'top-px left-[16px] text-indigo-900 bg-white p-1 text-xs':
                    $attrs.modelValue?.length > 0,
            }"
        >
            {{ label }}
        </span>
        <BaseInput
            v-bind="$attrs"
            :disabled="disabled"
            class="px-[18px] border z-10 transition-colors duration-200 focus:outline-none rounded text-indigo-900 py-2.5"
            :class="{
                'border-gray-200 cursor-not-allowed bg-gray-50': disabled,
                'border-gray-500 bg-white focus:border-orange-700':
                    errors.length == 0 && !disabled,
                'border-red-signal bg-white': errors.length > 0 && !disabled,
            }"
        />
    </div>
</template>

<script lang="ts" setup>
import { Input as BaseInput } from '@macramejs/macrame-vue3';

defineProps({
    label: {
        type: String,
        default: null,
    },
    hint: {
        type: String,
        default: null,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    errors: {
        type: Array,
        default: [],
    },
});
</script>

<script lang="ts">
export default {
    inheritAttrs: false,
    customOptions: {},
};
</script>
