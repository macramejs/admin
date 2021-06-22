<template>
    <base-textarea v-bind="$attrs" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Textarea as BaseTextarea } from '@macramejs/macrame-vue3';

export default defineComponent({
    components: { BaseTextarea },
});
</script>
