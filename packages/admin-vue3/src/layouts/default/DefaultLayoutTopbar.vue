<template>
    <div
        class="sticky top-0 z-10 h-[80px] transition-all border-b border-gray-400 bg-gray-50"
    >
        <div class="container flex items-center justify-between h-full px-10">
            <div
                class="flex items-baseline space-x-4 font-medium text-gray-800"
            >
                <slot name="topbar-left" />
            </div>
            <div class="flex space-x-2">
                <slot name="topbar-right" />
            </div>
        </div>
        <div
            class="container flex items-center justify-end space-x-4 text-sm text-gray-800"
        >
            <slot name="topbar-secondary" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const expanded = ref(false);
</script>
