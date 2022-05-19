<template>
    <div
        class="flex items-center justify-center w-5 h-5 rounded-xs"
        @click="toggle"
        :class="{
            'text-white bg-gray-800': modelValue,
            'text-gray-800 bg-gray-100': !modelValue,
        }"
    >
        <IconLocked v-if="modelValue" class="w-3 h-3" />
        <IconUnlocked v-if="!modelValue" class="w-3 h-3" />
    </div>
</template>

<script setup lang="ts">
import { IconLocked, IconUnlocked } from '../../../icons';
const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true,
    },
});

const emit = defineEmits(['update:modelValue']);

const toggle = () => {
    emit('update:modelValue', !props.modelValue);
    localStorage.setItem('sideBarLocked', !props.modelValue);
};
</script>
