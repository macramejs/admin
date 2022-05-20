<template>
    <div
        v-if="!preview"
        class="flex mb-3 bg-white cursor-pointer hover:ring-2 rounded-xs"
        :class="{
            'hover:ring-purple ': color as any  == 'purple',
            'hover:ring-green ': color as any  == 'green',
            'hover:ring-orange ': color as any  == 'orange',
            'hover:ring-red ': color as any  == 'red',
            'hover:ring-blue ': color as any  == 'blue',
        }"
    >
        <div
            class="flex items-center justify-center w-12 h-auto mr-3 bg-opacity-10 rounded-xs"
            :class="{
                'text-purple bg-purple ': color as any  == 'purple',
                'text-green bg-green ': color as any  == 'green',
                'text-orange bg-orange ': color as any  == 'orange',
                'text-red bg-red ': color as any  == 'red',
                'text-blue bg-blue ': color as any == 'blue',
            }"
        >
            <slot />
        </div>
        <div class="text-sm font-medium">
            {{ title }}
            <div
                class="text-xs font-normal text-gray"
                v-if="hint"
                v-html="hint"
            ></div>
        </div>
    </div>
    <div
        v-if="preview"
        class="flex rounded-xs items-center justify-center mr-3 bg-opacity-10 px-4 py-2 space-x-2"
        :class="{
            'bg-purple ': color as any  == 'purple',
            'bg-green ': color as any  == 'green',
            'bg-orange ': color as any  == 'orange',
            'bg-red ': color as any  == 'red',
            'bg-blue ': color as any  == 'blue',
        }"
    >
        <div
            :class="{
                'text-purple ': color as any  == 'purple',
                'text-green ': color as any  == 'green',
                'text-orange ': color as any  == 'orange',
                'text-red ': color as any  == 'red',
                'text-blue ': color as any == 'blue',
            }"
        >
            <slot />
        </div>
        <div class="text-sm font-medium">
            {{ title }}
        </div>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps({
    color: {
        type: String,
        default: 'purple',
    },
    title: {
        type: String,
        required: true,
    },
    hint: {
        type: String,
        default: null,
    },
    preview: {
        type: Boolean,
        default: false,
    },
});
</script>
