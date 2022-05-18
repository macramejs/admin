<template>
    <Popper v-bind="$attrs" placement="right-end" arrow class="popper-wrapper">
        <slot name="button">
            <button class="p-1 text-gray-100 hover:bg-black rounded-xs">
                <IconMoreHorizontal class="w-4 h-4" />
            </button>
        </slot>
        <template #content>
            <div
                class="z-50 p-4 rounded-[8px] px-[14px] text-base py-[24px] min-w-[200px] text-white bg-indigo-900"
            >
                <div class="flex flex-col">
                    <slot />
                </div>
            </div>
        </template>
    </Popper>
</template>

<script lang="ts" setup>
import Popper from 'vue3-popper';
import IconMoreHorizontal from './../icons/IconMoreHorizontal.vue';
</script>

<style>
#arrow::before {
    background-color: #120f30 !important;
}
/* This centers the button which is always wrapperd in a trigger div */
.popper-wrapper > div:not(.popper) {
    display: flex;
}
</style>
