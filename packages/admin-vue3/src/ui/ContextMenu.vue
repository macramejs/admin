<template>
    <Popper v-bind="$attrs" placement="right-end" arrow>
        <div>
            <slot name="button">
                <button class="bg-gray-200 p-0.5 z-10 rounded-[8px]">
                    <svg
                        width="24"
                        height="24"
                        stroke-width="1.5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M18 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM12 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM6 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
            </slot>
        </div>
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
</script>

<style>
#arrow::before {
    background-color: #120f30 !important;
}
</style>
