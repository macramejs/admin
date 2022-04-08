<template>
    <div
        class="flex items-center justify-center w-5 h-5 rounded-xs" @click="emit('update:modelValue', !modelValue)"
        :class="{
            'text-white bg-gray-800': modelValue,
            'text-gray-800 bg-gray-100': !modelValue,
        }"
    >
        <svg v-if="modelValue" class="w-3 h-3" width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 12H17.4C17.7314 12 18 12.2686 18 12.6V19.4C18 19.7314 17.7314 20 17.4 20H6.6C6.26863 20 6 19.7314 6 19.4V12.6C6 12.2686 6.26863 12 6.6 12H8M16 12V8C16 6.66667 15.2 4 12 4C8.8 4 8 6.66667 8 8V12M16 12H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-if="!modelValue" class="w-3 h-3" width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5 12H6.6C6.26863 12 6 12.2686 6 12.6V19.4C6 19.7314 6.26863 20 6.6 20H17.4C17.7314 20 18 19.7314 18 19.4V18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 12V8C16 6.66667 15.2 4 12 4C11.2532 4 10.6371 4.14525 10.1313 4.38491" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 12H17.4C17.7314 12 18 12.2686 18 12.6V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 8V8.5V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 3L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
</template>

<script setup lang="ts">
defineProps({
    modelValue: {
        type: Boolean,
        required: true
    }
})

const emit = defineEmits(['update:modelValue'])

</script>
