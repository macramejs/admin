<template>
    <div class="mb-3 font-medium text-lg">
        <slot>
            {{ label }}
        </slot>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    label: {
        type: String,
    },
});
</script>
