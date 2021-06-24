<template>
    <div class="flex w-screen">
        <sidebar>
            <button @click="toggleSidebarSecondary()">Toggle Sidebar</button>
        </sidebar>
        <sidebar-secondary v-if="show_sidebar_secondary">
            <slot name="sidebar-secondary" />
        </sidebar-secondary>
        <div class="flex-1 h-screen overflow-y-scroll">
            <header class="sticky top-0 z-20 w-full bg-white">
                <nav
                    class="flex items-center justify-between h-12 px-4 border-b border-gray-300 "
                >
                    <div>
                        <slot name="header-left" />
                    </div>
                    <div>
                        <slot name="header-right" />
                    </div>
                </nav>
                <nav
                    class="flex items-center justify-between h-6 px-4 text-sm border-b border-gray-300  text-gray"
                >
                    <div>
                        <slot name="header-secondary-left" />
                    </div>
                    <div>
                        <slot name="header-secondary-right" />
                    </div>
                </nav>
            </header>
            <main class="relative">
                <button @click="toggleSidebarRight()">Toggle Sidebar</button>
                <slot />

                <transition-slide to="left">
                    <sidebar-right v-if="show_sidebar_right">
                        <slot name="sidebar-right" />
                    </sidebar-right>
                </transition-slide>
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Sidebar from '../components/Sidebar.vue';
import SidebarSecondary from '../components/SidebarSecondary.vue';
import SidebarRight from '../components/SidebarRight.vue';
import TransitionSlide from '../transitions/TransitionSlide.vue';
export default defineComponent({
    components: { Sidebar, SidebarSecondary, SidebarRight, TransitionSlide },
    name: 'Layout',
    setup() {
        const show_sidebar_secondary = ref<boolean>(false);
        const show_sidebar_right = ref<boolean>(false);

        const toggleSidebarSecondary = (): void => {
            show_sidebar_secondary.value = !show_sidebar_secondary.value;
        };
        const toggleSidebarRight = (): void => {
            show_sidebar_right.value = !show_sidebar_right.value;
        };
        return {
            show_sidebar_secondary,
            show_sidebar_right,
            toggleSidebarSecondary,
            toggleSidebarRight,
        };
    },
});
</script>
