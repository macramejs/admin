<template>
    <div class="todo">
        <slot name="label">
            <FormFieldLabel :label="label" />
        </slot>
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import FormFieldLabel from './FormFieldLabel.vue';

const props = defineProps({
    label: {
        type: String,
    },
});
</script>
