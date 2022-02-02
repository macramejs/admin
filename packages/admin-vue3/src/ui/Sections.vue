<template>
    <div
        class="min-h-[20px] space-y-2 rounded relative"
        :class="{
            'outline-dashed outline-3 outline-gray h-36':
                Object.keys($attrs.modelValue).length == 0,
        }"
    >
        <template v-if="Object.keys($attrs.modelValue).length == 0">
            <div
                class="absolute top-0 flex items-center justify-center w-full h-full text-gray"
            >
                <slot name="drag-text"> Drag your content here </slot>
            </div>
        </template>
        <Sections v-bind="$attrs" />
    </div>
</template>

<script lang="ts" setup>
import { TabGroup } from '@headlessui/vue';
import { Sections } from '@macramejs/page-builder-vue3';
import { defineProps, defineEmits } from 'vue';
</script>
