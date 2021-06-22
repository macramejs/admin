<template>
    <div
        :class="{
            'stacked flex-col': stacked,
        }"
        class="ui-button-group flex"
    >
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        stacked: {
            type: Boolean,
            default: false,
        },
    },
});
</script>

<style>
.ui-button-group:not(.stacked) > *:first-child {
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
}
.ui-button-group:not(.stacked) > *:last-child {
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
}
.ui-button-group.stacked > *:first-child {
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
}
.ui-button-group.stacked > *:last-child {
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
}
.ui-button-group > *:not(:first-child):not(:last-child) {
    border-radius: 0 !important;
}
</style>
