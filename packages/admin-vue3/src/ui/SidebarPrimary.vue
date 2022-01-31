<template>
    <div
        class="flex flex-col justify-between h-screen transition-all bg-white border-r border-gray-400"
        @mouseover="expanded = true"
        @mouseleave="expanded = false"
        :class="{
            'w-[77px]': !expanded,
            'w-[250px]': expanded,
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
            <slot v-bind:expanded="expanded" />
        </nav>
        <footer class="flex px-5 py-6">
            <button
                @click="globalSearchOpen = true"
                class="flex items-center justify-center bg-gray-300 rounded w-9 h-9"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-2.5 -2.5 24 24"
                    class="w-4 h-4 fill-current"
                >
                    <path
                        d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z"
                    ></path>
                </svg>
            </button>
            <Modal lg v-model:open="globalSearchOpen">
                <div class="flex items-center h-56 gap-3 overflow-y-auto">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-2.5 -2.5 24 24"
                        width="16"
                        height="16"
                        preserveAspectRatio="xMinYMin"
                        class="fill-gray-800 icon__icon"
                    >
                        <path
                            d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z"
                        ></path>
                    </svg>
                    <BaseInput
                        class="flex-1"
                        v-model.debounce="globalSearchTerm"
                    />
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

defineProps({
    sidebar: Object as PropType<TSidebar>,
});

const globalSearchOpen = ref(false);
const globalSearchTerm = ref('');

const page = computed(() => {
    return usePage().url.value;
});

const expanded = ref(false);
</script>
