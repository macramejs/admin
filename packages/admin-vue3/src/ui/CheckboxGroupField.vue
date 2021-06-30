<template>
    <FormField v-bind="$attrs">
        <FormCheckboxes as="ui-checkbox" v-bind="$attrs" />
    </FormField>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FormCheckboxes } from '@macramejs/macrame-vue3';
import FormField from './FormField.vue';

export default defineComponent({
    components: {
        FormCheckboxes,
        FormField,
    },
});
</script>
