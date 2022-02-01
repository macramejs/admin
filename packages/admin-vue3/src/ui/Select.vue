<template>
    <div class="relative w-full">
        <select
            class="py-2 pl-3 w-full pr-8 select focus:outline-none focus:ring-4 focus:ring-orange-100 text-sm bg-gray-200 rounded-[8px]"
            v-bind="$attrs"
            v-model="value"
        >
            <option
                v-for="option in options"
                :key="option.value"
                :value="option.value"
            >
                {{ option.label }}
            </option>
        </select>
        <span class="absolute -translate-y-1/2 right-2 top-1/2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-5 -8 24 24"
                width="16"
                fill="currentColor"
            >
                <path
                    d="M7.071 5.314l4.95-4.95a1 1 0 1 1 1.414 1.414L7.778 7.435a1 1 0 0 1-1.414 0L.707 1.778A1 1 0 1 1 2.121.364l4.95 4.95z"
                ></path>
            </svg>
        </span>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, watch, ref, PropType } from 'vue';

interface Option {
    value: string;
    label: string;
}

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: {},
    options: {
        type: Array as PropType<Option[]>,
        required: true,
    },
});

const value = ref(props.modelValue);

watch([value], () => emit('update:modelValue', value.value));
</script>

<style>
.select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
</style>
