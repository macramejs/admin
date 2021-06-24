<template>
    <aside class="w-64 h-screen p-4 bg-white border-r border-gray-300 shadow">
        <slot />
    </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'SidebarSecondary',
    setup() {
        return {
            //
        };
    },
});
</script>
