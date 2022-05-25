<template>
    <button
        @click="globalSearchOpen = true"
        class="flex items-center justify-center text-gray-100 rounded w-9 h-9 hover:bg-gray-500 hover:bg-opacity-10"
    >
        <svg
            class="w-4 h-4"
            width="24"
            height="24"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15.5 15.5L19 19"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M5 11C5 14.3137 7.68629 17 11 17C12.6597 17 14.1621 16.3261 15.2483 15.237C16.3308 14.1517 17 12.654 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11Z"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
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
            <BaseInput class="flex-1" v-model.debounce="globalSearchTerm" />
        </div>
    </Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Modal from '../../Modal.vue';
import BaseInput from '../../BaseInput.vue';

const globalSearchOpen = ref<boolean>(false);
const globalSearchTerm = ref<string | number>('');
</script>
