<template>
    <Link
        :href="href"
        :class="{
            'bg-white bg-opacity-10 hover:bg-orange hover:bg-opacity-50':
                isActive && !secondary,
            'hover:bg-gray-100': !isActive && !secondary,
            'hover:bg-gray-100': secondary,
            'bg-gray-100': isActive && secondary,
        }"
        class="flex items-center rounded h-[44px] text-base font-light"
    >
        <div
            v-if="$slots.icon"
            class="w-[44px] min-w-[44px] h-[44px] rounded flex items-center justify-center"
            :class="{
                ' text-red': isActive && !secondary,
                ' text-gray-100': !isActive,
            }"
        >
            <slot name="icon" />
        </div>
        <div v-if="!hideTitle" class="flex-1 pl-3 tracking-wider text-gray-100">
            <slot>{{ title }}</slot>
        </div>
    </Link>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { Link, usePage } from '@inertiajs/inertia-vue3';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    href: {
        type: String,
    },
    hideTitle: {
        type: Boolean,
        default: false,
    },
    secondary: {
        type: Boolean,
        default: false,
    },
    active: {
        type: Boolean,
        default: false,
    },
});

const page = computed(() => {
    return usePage().url.value;
});

const isActive = computed(() => {
    if (props.active) {
        return true;
    }

    if (props.href == window.location.pathname) {
        return true;
    }

    return props.href ? page.value.includes(props.href) : false;
});
</script>
