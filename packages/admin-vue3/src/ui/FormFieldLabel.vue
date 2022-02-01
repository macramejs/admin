<template>
    <span class="inline-block mb-2">
        <slot>
            {{ label }}
        </slot>
    </span>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
    label: {
        type: String,
    },
});
</script>
