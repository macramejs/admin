<template>
    <div
        class="flex flex-col justify-between h-screen bg-gray-800 w-[320px] border-r border-gray-700"
    >
        <header
            class="flex items-center justify-between h-[80px] px-5 text-gray-100"
        >
            <slot name="header" />
        </header>
        <nav class="flex-1 max-h-[calc(100vh - 80px)] overflow-y-auto">
            <slot />
        </nav>
    </div>
</template>

<script lang="ts" setup></script>
