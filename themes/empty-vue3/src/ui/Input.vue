<template>
    <base-input v-bind="$attrs" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Input as BaseInput } from '@macramejs/macrame-vue3';

export default defineComponent({
    components: { BaseInput },
});
</script>
