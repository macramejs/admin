<template>
    <div
        class="flex-1 py-10 px-10 overflow-y-auto"
        :style="`height: calc(100vh - ${topPosition}px); top: ${topPosition}px;`"
    >
        <slot />
    </div>
</template>
<script lang="ts" setup>
defineProps({
    topPosition: {
        type: [String, Number],
        default: '110',
    },
});
</script>
