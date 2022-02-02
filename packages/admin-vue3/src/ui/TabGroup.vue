<template>
    <div class="w-full">
        <TabGroup>
            <slot />
        </TabGroup>
    </div>
</template>

<script lang="ts" setup>
import { TabGroup } from '@headlessui/vue';
</script>
