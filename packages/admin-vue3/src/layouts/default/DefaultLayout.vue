<template>
    <div class="flex w-screen">
        <aside
            class="
                z-10
                w-64
                h-screen
                p-4
                overflow-y-scroll
                text-white
                bg-blue-900
            "
        >
            <slot name="header">
                <DefaultLayoutHeader />
            </slot>
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
        <div class="flex flex-col flex-1 h-screen overflow-y-scroll">
            <header class="sticky top-0 z-20 w-full bg-white">
                <nav
                    class="
                        flex
                        items-center
                        justify-between
                        h-12
                        px-6
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
                        px-6
                        text-xs
                        border-b border-gray-300
                        text-gray
                    "
                >
                    <slot name="header-secondary" :sidebar="sidebar" />
                </nav>
            </header>
            <main class="relative flex-1 overflow-y-scroll">
                <slot :sidebar="sidebar" />
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import TransitionSlide from '../../transitions/TransitionSlide.vue';
import DefaultLayoutHeader from './DefaultLayoutHeader.vue';
import { TSidebar } from '../../..';

export default defineComponent({
    components: { TransitionSlide, DefaultLayoutHeader },
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
