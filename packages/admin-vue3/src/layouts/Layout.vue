<template>
    <div class="flex w-screen">
        <sidebar>
            <button @click="toggleSidebarSecondary()">
                Toggle Sidebar Left
            </button>
        </sidebar>
        <sidebar-secondary v-if="show_sidebar_secondary">
            <slot name="sidebar-secondary" />
        </sidebar-secondary>
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
                    <div>
                        <slot name="header-left" />
                    </div>
                    <div>
                        <slot name="header-right" />
                    </div>
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
                    <div>
                        <slot name="header-secondary-left" />
                    </div>
                    <div>
                        <slot name="header-secondary-right" />
                    </div>
                </nav>
            </header>
            <main class="relative">
                <slot />
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Sidebar from '../components/Sidebar.vue';
import SidebarSecondary from '../components/SidebarSecondary.vue';
import TransitionSlide from '../transitions/TransitionSlide.vue';
export default defineComponent({
    components: { Sidebar, SidebarSecondary, TransitionSlide },
    name: 'Layout',
    setup() {
        const show_sidebar_secondary = ref<boolean>(false);

        const toggleSidebarSecondary = (): void => {
            show_sidebar_secondary.value = !show_sidebar_secondary.value;
        };
        return {
            show_sidebar_secondary,
            toggleSidebarSecondary,
        };
    },
});
</script>
