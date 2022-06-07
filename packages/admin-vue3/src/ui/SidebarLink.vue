<template>
    <Link
        :href="href"
        :class="{
            'bg-black bg-opacity-75 hover:bg-opacity-100 hover:text-orange':
                isActive && !secondary,
            'hover:bg-gray-100 hover:bg-opacity-10': !isActive && !secondary,
            'hover:bg-gray-50 hover:bg-opacity-20 items-center h-[36px] flex-auto':
                secondary,
            'h-[44px]': !secondary,
            'bg-gray-50 bg-opacity-10': isActive && secondary,
        }"
        class="flex items-center text-base font-light rounded group"
    >
        <div
            v-if="$slots.icon"
            class="w-[44px] min-w-[44px] h-[44px] rounded flex items-center justify-center"
            :class="{
                ' text-orange': isActive && !secondary,
                ' text-gray-100': !isActive,
            }"
        >
            <slot name="icon" />
        </div>
        <div
            v-if="!hideTitle"
            class="flex-1 pl-3 tracking-wider text-gray-100"
            :class="{
                'group-hover:text-orange': isActive && !secondary,
            }"
        >
            <slot>{{ title }}</slot>
        </div>
    </Link>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/inertia-vue3';

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
        default: undefined,
    },
});

const isActive = computed(() => {
    if (props.active !== undefined) {
        return props.active;
    }

    if (
        props.href?.split('/').length ==
        window.location.pathname.split('/').length
    ) {
        return window.location.pathname == props.href;
    }

    if (props.href?.split('/').length > 2) {
        return window.location.pathname.includes(props.href);
    }

    return window.location.pathname == props.href;
});
</script>
