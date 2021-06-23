<template>
    <component
        :is="tag"
        class="w-full rounded-sm"
        :class="{
            'bg-white py-14 shadow': !info,
            'bg-gray-300 pb-9 pt-7': info,

            'px-14': !disableContainer && !info,
            'px-8': !disableContainer && info,
        }"
    >
        <slot name="header" />
        <div class="mb-3 font-semibold text-md">{{ title }}</div>
        <div class="text-xs">
            <slot />
        </div>
        <slot name="footer" />
    </component>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        tag: {
            type: String,
            default: 'div',
        },
        info: {
            type: Boolean,
            default: false,
        },
        disableContainer: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: '',
        },
    },
});
</script>

<style></style>
