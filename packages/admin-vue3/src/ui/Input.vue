<template>
    <BaseInput v-bind="$attrs" class="px-4 py-2" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Input as BaseInput } from '@macramejs/macrame-vue3';

export default defineComponent({
    components: { BaseInput },
});
</script>
