<template>
    <div class="flex w-screen h-screen">
        <div class="grid w-full h-full grid-cols-12">
            <div
                class="flex flex-col items-center justify-center col-span-12 gap-16 bg-white md:col-span-6"
            >
                <div class="w-full px-12 lg:w-1/2 lg:px-0">
                    <slot />
                </div>
            </div>
            <div
                class="flex items-center justify-center col-span-12 text-white bg-gray-50 md:col-span-6"
            >
                <Logo />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {},
});
</script>
