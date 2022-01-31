<template>
    <div class="w-full">
        <TabGroup>
            <TabList
                class="flex flex-wrap sticky z-[5] bg-gray-50 top-[80px] w-full px-10 border-b border-gray-200"
            >
                <slot name="tab-list" />
            </TabList>
            <TabPanels>
                <slot />
            </TabPanels>
        </TabGroup>
    </div>
</template>

<script lang="ts" setup>
import { TabGroup, TabList, TabPanels } from '@headlessui/vue';
</script>
