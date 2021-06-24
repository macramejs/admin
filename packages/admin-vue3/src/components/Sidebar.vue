<template>
    <aside
        class="z-10 w-64 h-screen p-4 overflow-y-scroll text-white bg-blue-900"
    >
        <header>Admin</header>
        <nav>
            <ul>
                <li>
                    <a href="">Link 1</a>
                </li>
                <li>
                    <a href="">Link 1</a>
                </li>
            </ul>
            <slot />
        </nav>
    </aside>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
    setup(props) {
        return {
            //
        };
    },
});
</script>
