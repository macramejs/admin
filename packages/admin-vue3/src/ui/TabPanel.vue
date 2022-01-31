<template>
    <TabPanel class="relative flex justify-between w-full">
        <div class="flex-1">
            <slot />
        </div>
        <template v-if="hasSidebar">
            <div
                class="w-[233px] sticky bg-white shadow"
                :style="`height: calc(100vh - ${sidebarTopPosition}px); top: ${sidebarTopPosition}px;`"
            >
                <slot name="sidebar" />
            </div>
        </template>
    </TabPanel>
</template>

<script lang="ts" setup>
import { TabPanel } from '@headlessui/vue';

defineProps({
    hasSidebar: {
        type: Boolean,
        default: false,
    },
    sidebarTopPosition: {
        type: String,
        default: '118',
    },
});
</script>
