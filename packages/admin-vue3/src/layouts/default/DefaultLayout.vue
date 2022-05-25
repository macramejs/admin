<template>
    <div class="flex w-screen h-screen max-h-screen">
        <div id="sidebars" class="flex h-screen shadow">
            <slot name="sidebar-primary" :sidebar="sidebar" />
            <slot name="sidebar-secondary" />
        </div>
        <div
            class="relative flex flex-col flex-1 h-screen overflow-y-scroll bg-gray-50"
        >
            <main class="relative flex-1 overflow-y-scroll">
                <DefaultLayoutTopbar>
                    <template v-slot:topbar-left>
                        <slot name="topbar-left" />
                    </template>
                    <template v-slot:topbar-right>
                        <slot name="topbar-right" />
                    </template>
                </DefaultLayoutTopbar>
                <slot />
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import TransitionSlide from '../../transitions/TransitionSlide.vue';
import DefaultLayoutHeader from './DefaultLayoutHeader.vue';
import DefaultLayoutTopbar from './DefaultLayoutTopbar.vue';
import { TSidebar } from '../../..';

export default defineComponent({
    components: { TransitionSlide, DefaultLayoutHeader, DefaultLayoutTopbar },
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
