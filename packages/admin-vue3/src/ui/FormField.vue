<template>
    <div class="todo">
        <template v-if="!noLabel">
            <slot name="label">
                <FormFieldLabel :label="label" />
            </slot>
        </template>
        <slot />
        <div
            v-if="hint && !errors"
            class="ml-[18px] mt-1 text-xs text-gray-500"
        >
            {{ hint }}
        </div>
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
    hint: {
        type: String,
    },
    noLable: {
        type: Boolean,
        default: false,
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
