<template>
    <Link
        :href="href"
        :class="{
            'bg-orange bg-opacity-20 hover:bg-opacity-50': page.includes(href),
            'hover:bg-gray-300': !page.includes(href),
        }"
        class="flex items-center rounded"
    >
        <div
            class="w-[44px] min-w-[44px] h-[44px] rounded flex items-center text-gray-800 justify-center"
            :class="{
                ' text-red': page.includes(href),
            }"
        >
            <slot />
        </div>
        <div
            v-if="expanded"
            class="flex-1 pl-3 font-medium tracking-wider"
            :class="{
                'text-red': page.includes(href),
            }"
        >
            {{ title }}
        </div>
    </Link>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { Link, usePage } from '@inertiajs/inertia-vue3';

const page = computed(() => {
    return usePage().url.value;
});

const props = defineProps({
    title: {
        type: String,
    },
    href: {
        type: String,
    },
    expanded: {
        type: Boolean,
        default: false,
    },
});
</script>
