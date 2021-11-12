<template>
    <div class="todo">
        <slot name="label">
            <FormFieldLabel :label="label" />
        </slot>
        <slot />

        <div v-if="errors">
            <span v-for="(error, key) in errorList" :key="key" class="text-red">
                {{ error }}
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue';
import FormFieldLabel from './FormFieldLabel.vue';

const props = defineProps({
    label: {
        type: String,
    },
    errors: {
        type: [Array, String],
        default: null,
    },
});

const errorList = computed(() => {
    if (!props.errors) {
        return [];
    }

    if (Array.isArray(props.errors)) {
        return props.errors;
    }

    return [props.errors];
});
</script>
