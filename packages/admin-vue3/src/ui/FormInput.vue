<template>
    <div>
        <field-title v-bind="$attrs" />
        <form-input v-bind="$attrs" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FormInput, FieldTitle } from '@macramejs/macrame-vue3';

export default defineComponent({
    components: { FormInput, FieldTitle },
});
</script>
