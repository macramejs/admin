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
            <header>
                <div class="flex items-center pt-2 pb-20 justify-between">
                    <Logo />
                    <div class="flex items-center gap-4">
                        <button class="text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="-2.5 -2.5 24 24"
                                width="24"
                                height="24"
                                preserveAspectRatio="xMinYMin"
                                class="fill-current"
                            >
                                <path
                                    d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm6.32-1.094l3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z"
                                ></path>
                            </svg>
                        </button>
                        <Burger />
                    </div>
                </div>
            </header>
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
import TransitionSlide from '../transitions/TransitionSlide.vue';
import { TSidebar } from '../..';
import { Logo, Burger } from './components';

export default defineComponent({
    components: { TransitionSlide, Logo, Burger },
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
