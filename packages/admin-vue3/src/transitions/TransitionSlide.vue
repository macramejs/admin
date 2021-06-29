<template>
    <transition :name="`slide-${to}`">
        <slot />
    </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'TransitionSlide',
    props: {
        to: {
            type: String,
            default: 'left',
        },
    },
    setup() {
        //
    },
});
</script>
<style>
.slide-up-enter-active,
.slide-down-enter-active,
.slide-left-enter-active,
.slide-right-enter-active {
    transition: all 0.1s ease;
}

.slide-up-leave-active,
.slide-down-leave-active,
.slide-left-leave-active,
.slide-right-leave-active {
    transition: all 0.1s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
    transform: translateY(100%);
}
.slide-down-enter-from,
.slide-down-leave-to {
    transform: translateY(-100%);
}
.slide-left-enter-from,
.slide-left-leave-to {
    transform: translateX(100%);
}
.slide-right-enter-from,
.slide-right-leave-to {
    transform: translateX(-100%);
}
</style>
