<template>
    <Header class="sidebar-secondary-header">
        <span class="inline-block text-xl font-medium">
            {{ title }}
        </span>
        <slot />
    </Header>
</template>

<script lang="ts" setup>
import Header from './Header.vue';

defineProps({
    title: {
        type: String,
        required: true,
    },
});
</script>

<style>
.sidebar-secondary-header {
    border-bottom: 1px solid hsl(0deg 0% 100% / 10%);
    margin-bottom: 20px;
}
</style>
