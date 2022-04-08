<template>
    <Disclosure v-slot="{ open }" defaultOpen>
        <div class="flex items-center justify-between w-full">
            <div
                class="flex justify-between flex-1 pl-3 pr-2 rounded hover:bg-gray-100"
            >
                <div
                    class="flex items-center pr-3 cursor-move text-gray handle"
                >
                    <svg
                        class="w-3 h-3 fill-gray"
                        viewBox="0 0 18 9"
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                    >
                        <path
                            d="M18 7.597a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h16a1 1 0 0 0 1-1ZM18 1a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h16a1 1 0 0 0 1-1Z"
                        />
                    </svg>
                </div>
                <div class="flex items-center justify-between flex-1 py-1">
                    <slot />
                </div>
            </div>
            <div class="flex items-center w-8">
                <DisclosureButton
                    class="p-1 hover:bg-gray-400 rounded-xs"
                    :class="{ 'rotate-180': !open }"
                    v-if="children?.items.length > 0"
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
                </DisclosureButton>
            </div>
        </div>
        <DisclosurePanel class="pl-6">
            <slot name="disclosure" />
        </DisclosurePanel>
    </Disclosure>
</template>

<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

const props = defineProps({
    item: {
        required: true,
    },
    children: {
        required: true,
    },
});
</script>
