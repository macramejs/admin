<template>
    <FormField v-bind="$attrs">
        <FormTextarea as="ui-textarea" v-bind="$attrs" />
    </FormField>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FormTextarea } from '@macramejs/macrame-vue3';
import FormField from './FormField.vue';

export default defineComponent({
    components: { FormTextarea, FormField },
});
</script>
