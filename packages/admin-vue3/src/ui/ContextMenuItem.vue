<template>
    <button
        class="w-full py-2.5 px-[14px] text-left hover:bg-white hover:bg-opacity-20 rounded-[8px]"
        :class="{
            'flex items-center gap-2': $slots.icon,
        }"
    >
        <slot name="icon" />
        <slot>{{ label }}</slot>
    </button>
</template>

<script lang="ts" setup>
defineProps({
    label: {
        type: String,
        required: false,
    },
});
</script>
