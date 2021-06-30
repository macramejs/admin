<template>
    <FormField v-bind="$attrs">
        <FormSelect as="ui-select" v-bind="$attrs" />
    </FormField>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FormSelect } from '@macramejs/macrame-vue3';
import FormField from './FormField.vue';

export default defineComponent({
    components: { FormSelect, FormField },
});
</script>
