<template>
    <div class="flex w-screen">
        <aside
            class="z-10 w-64 h-screen overflow-y-scroll text-white bg-blue-900"
        >
            <header class="p-4">Admin</header>
            <nav>
                <slot name="sidebar" :sidebar="sidebar" />
            </nav>
        </aside>
        <aside
            class="w-64 h-screen p-4 bg-white border-r border-gray-300 shadow"
            v-if="sidebar.isOpen"
        >
            <slot name="sidebar-secondary" />
        </aside>
        <div class="flex-1 h-screen overflow-y-scroll">
            <header class="sticky top-0 z-20 w-full bg-white">
                <nav
                    class="
                        flex
                        items-center
                        justify-between
                        h-12
                        px-4
                        border-b border-gray-300
                    "
                >
                    <slot name="header" :sidebar="sidebar" />
                </nav>
                <nav
                    class="
                        flex
                        items-center
                        justify-between
                        h-6
                        px-4
                        text-sm
                        border-b border-gray-300
                        text-gray
                    "
                >
                    <slot name="header-secondary" :sidebar="sidebar" />
                </nav>
            </header>
            <main class="relative">
                <slot :sidebar="sidebar" />
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import TransitionSlide from '../transitions/TransitionSlide.vue';

type TSidebar = {
    isOpen: boolean;
    show: () => void;
    close: () => void;
    toggle: () => void;
};

export default defineComponent({
    components: { TransitionSlide },
    name: 'Layout',
    setup() {
        const sidebar = reactive<TSidebar>({
            isOpen: false,
            show() {
                this.isOpen = true;
            },
            close() {
                this.isOpen = false;
            },
            toggle() {
                this.isOpen = !this.isOpen;
            },
        });
        return {
            sidebar,
        };
    },
});
</script>
