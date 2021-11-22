<template>
    <select v-bind="$attrs" v-model="value">
        <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
        >
            {{ option.label }}
        </option>
    </select>
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
