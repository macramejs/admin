<template>
    <aside
        class="fixed top-0 right-0 z-10 w-64 h-full pt-12 mt-6 bg-white border-l border-gray-300 shadow "
    >
        <div class="h-full px-4 overflow-y-scroll">
            <slot />
        </div>
    </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'SidebarRight',
    setup() {
        return {
            //
        };
    },
});
</script>
