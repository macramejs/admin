<template>
    <base-select v-bind="$attrs" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Select as BaseSelect } from '@macramejs/macrame-vue3';

export default defineComponent({
    components: { BaseSelect },
});
</script>
