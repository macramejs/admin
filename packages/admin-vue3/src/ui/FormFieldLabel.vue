<template>
    <span class="inline-block mb-[14px]">
        <slot>
            {{ label }}
        </slot>
    </span>
</template>

<script lang="ts" setup>
defineProps({
    label: {
        type: String,
    },
});
</script>
