<template>
   <button
        @click="globalSearchOpen = true"
        class="flex items-center justify-center bg-gray-100 rounded w-9 h-9"
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
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Modal from '../../Modal.vue';

const globalSearchOpen = ref<boolean>(false);
const globalSearchTerm = ref<string|number>('');
</script>
