<template>
    <Header>
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
