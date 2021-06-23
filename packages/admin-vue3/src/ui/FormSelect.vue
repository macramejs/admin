<template>
    <div>
        <field-title v-bind="$attrs" />
        <form-select v-bind="$attrs" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FormSelect, FieldTitle } from '@macramejs/macrame-vue3';

export default defineComponent({
    components: { FormSelect, FieldTitle },
});
</script>
