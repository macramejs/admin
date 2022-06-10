<template>
    <component
        :is="isRouterLink ? 'router-link' : 'a'"
        :to="to"
        :href="href"
        :class="{
            // primary
            'bg-white bg-opacity-10 hover:text-orange': isActive && !secondary,
            'h-[44px]': !secondary,
            // secondary
            'items-center h-[36px] flex-auto': secondary,
            'bg-gray-50 bg-opacity-10': isActive && secondary,
        }"
        class="flex items-center text-base font-light rounded group hover:bg-white hover:bg-opacity-10"
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
            <slot>{{ title }} {{ to }} {{ isRouterLink }}</slot>
        </div>
    </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { RouterLink, useLink } from "vue-router";

const props = defineProps({
    // @ts-ignore
    ...RouterLink.props,
    href: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: true,
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

const isRouterLink = computed(
    () => props.to && !props.to.startsWith('http')
);

const routerLink = computed(
    // @ts-ignore
    () => isRouterLink.value ? useLink(props) : null
);

const isActive = computed(
    () => routerLink ? routerLink.value?.isActive.value : false
);
</script>
