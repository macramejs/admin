<template>
    <TransitionRoot
        :show="open"
        as="template"
        enter="transition-all duration-75"
        enter-to="opacity-100"
        leave="transition-all duration-150"
        enter-from="transform translate-x-full"
        leave-from="transformtranslate-x-full"
        leave-to="transform translate-x-full"
    >
        <Dialog as="div" v-bind="$attrs" :open="open">
            <div
                class="fixed top-0 right-0 z-10 w-64 h-full mt-6 bg-gray-800 border-l border-gray-300 shadow pt-14"
            >
                <aside class="min-h-screen text-center">
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0"
                        enter-to="opacity-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100"
                        leave-to="opacity-0"
                    >
                        <DialogOverlay class="fixed inset-0" />
                    </TransitionChild>

                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95"
                    >
                        <div
                            class="inline-block w-full max-w-md overflow-y-scroll text-left transition-all transform"
                        >
                            <button @click="$emit('close', false)">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"
                                    />
                                </svg>
                            </button>
                            <slot />
                        </div>
                    </TransitionChild>
                </aside>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script>
import { defineComponent } from 'vue';
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
} from '@headlessui/vue';

export default defineComponent({
    components: {
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogOverlay,
        DialogTitle,
    },
    props: {
        open: {
            type: Boolean,
            required: true,
        },
    },
});
</script>
