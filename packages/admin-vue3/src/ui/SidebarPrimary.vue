<template>
    <div
        class="flex flex-col justify-between h-screen transition-all duration-300 bg-white border-r border-gray-400"
        @mouseover="expanded = true"
        @mouseleave="expanded = false"
        :class="{
            'w-[77px]': !isExpanded,
            'w-[250px]': isExpanded,
        }"
    >
        <header class="flex items-center justify-between h-20 px-4 py-7">
            <div class="relative flex items-center w-full h-10 overflow-hidden">
                <Link href="/admin">
                    <div class="w-36">
                        <slot name="logo" />
                    </div>
                </Link>
            </div>
        </header>
        <nav class="flex-1">
            <slot v-bind:expanded="isExpanded" />
        </nav>
        <footer class="flex px-4 py-6">
            <button
                @click="globalSearchOpen = true"
                class="flex items-center transition-all focus:outline-none focus:ring-4 focus:ring-orange-100 duration-300 px-[13px] min-w-[44px] text-gray-500 border rounded h-[44px]"
                :class="{
                    '!min-w-full border-gray-500': isExpanded,
                    'bg-gray-100 border-gray-100': !isExpanded,
                }"
            >
                <div class="flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-2.5 -2.5 24 24"
                        class="w-4 h-4 fill-current"
                    >
                        <path
                            d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z"
                        ></path>
                    </svg>
                    <span v-if="isExpanded">Suchen</span>
                </div>
                <div v-if="isExpanded" class="ml-auto text-gray-300">⌘K</div>
            </button>
            <Modal lg v-model:open="globalSearchOpen">
                <div class="h-96">
                    <div
                        class="flex items-center gap-3 px-6 pb-6 -mx-6 overflow-y-auto border-b border-gray-200"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="-2.5 -2.5 24 24"
                            width="20"
                            height="20"
                            preserveAspectRatio="xMinYMin"
                            class="fill-gray-800 icon__icon"
                        >
                            <path
                                d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z"
                            ></path>
                        </svg>
                        <BaseInput
                            placeholder="search cms"
                            class="flex-1 focus:outline-none"
                            v-model.debounce="globalSearchTerm"
                        />
                        <button
                            @click="globalSearchOpen = false"
                            class="px-2 py-1 text-xs bg-gray-100 text-gray rounded-[8px]"
                        >
                            ESC
                        </button>
                    </div>
                    <div class="pt-6" v-if="globalSearchTerm.length > 0">
                        Hier könnten ihre Ergebnisse stehen. Globale Suche
                        mittles Algolia???
                    </div>
                </div>
            </Modal>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PropType, computed } from 'vue';
import { TSidebar } from '@macramejs/admin-vue3';
import { usePage, Link } from '@inertiajs/inertia-vue3';
import Modal from './Modal.vue';
import { Input as BaseInput } from '@macramejs/macrame-vue3';

const props = defineProps({
    sidebar: Object as PropType<TSidebar>,
    defaultExpanded: {
        type: Boolean,
        default: false,
    },
});

const globalSearchOpen = ref(false);
const globalSearchTerm = ref('');

const page = computed(() => {
    return usePage().url.value;
});

const isExpanded = computed(() => {
    if (props.defaultExpanded) {
        return true;
    }
    return expanded.value;
});
const expanded = ref(false);
</script>
