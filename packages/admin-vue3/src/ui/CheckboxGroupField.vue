<template>
    <FormField v-bind="$attrs">
        <CheckboxGroupField v-bind="$attrs" />
    </FormField>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormField from './FormField.vue';
import CheckboxGroup from './CheckboxGroup.vue';

export default defineComponent({
    components: { CheckboxGroup, FormField },
});
</script>
