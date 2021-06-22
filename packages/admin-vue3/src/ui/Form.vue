<template>
    <base-form v-bind="$attrs" :form="form" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Form as BaseForm, useForm } from '@macramejs/macrame-vue3';
import { UseFormAttrs } from '@macramejs/macrame';

export default defineComponent({
    components: { BaseForm },
    setup(props, { attrs }) {
        const form = useForm(<UseFormAttrs>attrs);

        return { form };
    },
});
</script>
