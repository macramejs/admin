<template>
    <div
        class="flex flex-col justify-between h-screen transition-all bg-gray-900 border-r border-gray-700"
        @mouseover="expanded = true"
        @mouseleave="expanded = false"
        :class="{
            'w-[77px]': !showSidebar,
            'w-[250px] show-sidebar': showSidebar,
        }"
    >
        <header class="flex items-center justify-between h-[80px] px-4 py-7">
            <div class="relative flex items-center w-full h-10 overflow-hidden">
                <Link href="/admin">
                    <div class="w-[154px]">
                        <slot name="logo" />
                    </div>
                </Link>
            </div>
        </header>
        <nav class="flex-1">
            <slot v-bind:expanded="showSidebar" />
        </nav>
        <slot name="footer">
            <footer class="flex flex-col items-start px-5 py-6 space-y-2">
                <GlobalSearch />
                <LockSidebar v-model="locked" />
            </footer>
        </slot>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { computed } from 'vue';
import { Link } from '@inertiajs/inertia-vue3';
import GlobalSearch from './components/GlobalSearch.vue';
import LockSidebar from './components/LockSidebar.vue';

const props = defineProps({
    locked: {
        type: Boolean,
        default: false,
    },
});

const expanded = ref(false);
const locked = ref<boolean>(props.locked);

const showSidebar = computed(() => {
    return expanded.value || locked.value;
});
</script>
