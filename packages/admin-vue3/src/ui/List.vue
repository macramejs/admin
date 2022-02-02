<template>
    <Draggable tag="div" :list="list.items" handle=".handle" item-key="uuid">
        <template #item="{ element }">
            <div class="px-2 py-1 bg-white draggable-wrapper">
                <Disclosure v-slot="{ open }" defaultOpen>
                    <div class="flex items-center justify-between w-full">
                        <div
                            class="flex justify-between flex-1 pl-3 pr-2 rounded hover:bg-gray-300"
                        >
                            <div
                                class="flex items-center pr-2 cursor-move text-gray handle"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    class="w-4 h-4 fill-current"
                                    fill="currentColor"
                                >
                                    <g>
                                        <rect
                                            fill="none"
                                            height="24"
                                            width="24"
                                        />
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M20,9H4v2h16V9z M4,15h16v-2H4V15z"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div
                                class="flex items-center justify-between flex-1 py-1"
                            >
                                <slot :item="element" />
                            </div>
                        </div>
                        <div class="flex items-center w-8">
                            <DisclosureButton
                                class="p-1 hover:bg-gray-400 rounded-xs"
                                :class="{ 'rotate-180': !open }"
                                v-if="element.children?.items.length > 0"
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
                        <slot name="disclosure" :item="element" />
                    </DisclosurePanel>
                </Disclosure>
            </div>
        </template>
    </Draggable>
</template>
<script setup lang="ts">
import Draggable from 'vuedraggable';
import { defineProps, PropType } from 'vue';
import { TList } from '@macramejs/macrame-vue3';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

const props = defineProps({
    list: {
        required: true,
        type: Object as PropType<TList>,
    },
});
</script>
