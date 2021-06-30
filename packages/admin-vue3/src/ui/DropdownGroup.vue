<template>
    <div class="dropdown-group">
        <div class="px-2 pt-2 text-xs text-gray-600">
            <slot name="title">{{ title }}</slot>
        </div>
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        title: {
            type: String,
            default: null,
        },
    },
});
</script>
