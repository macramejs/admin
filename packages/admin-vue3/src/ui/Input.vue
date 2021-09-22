<template>
    <BaseInput v-bind="$attrs" class="py-2 px-4" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Input as BaseInput } from '@macramejs/macrame-vue3';

export default defineComponent({
    components: { BaseInput },
});
</script>
