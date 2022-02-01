<template>
    <div class="w-full py-4 border-b border-gray-400">
        <Disclosure v-slot="{ open }" defaultOpen>
            <DisclosureButton
                class="flex items-center justify-between w-full px-4 text-sm font-medium"
            >
                <div v-html="title"></div>
                <div
                    :class="{
                        'rotate-180': !open,
                    }"
                >
                    <svg
                        width="24"
                        height="24"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-3 h-3"
                    >
                        <path
                            d="M6 9L12 15L18 9"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
            </DisclosureButton>

            <DisclosurePanel class="px-4 pt-3">
                <slot />
            </DisclosurePanel>
        </Disclosure>
    </div>
</template>
<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
});
</script>
