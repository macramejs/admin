<template>
    <span class="inline-block mb-[14px]">
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
