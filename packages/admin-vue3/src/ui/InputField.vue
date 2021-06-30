<template>
    <FormField v-bind="$attrs">
        <FormInput as="ui-input" v-bind="$attrs" />
    </FormField>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FormInput, FieldTitle } from '@macramejs/macrame-vue3';
import FormField from './FormField.vue';

export default defineComponent({
    components: { FormInput, FieldTitle, FormField },
});
</script>
