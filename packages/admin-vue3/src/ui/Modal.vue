<template>
    <TransitionRoot appear :show="open" as="template">
        <Dialog as="div" :open="open" @close="close">
            <div class="fixed inset-0 z-50 overflow-y-auto">
                <div class="min-h-screen px-4 text-center">
                    <TransitionChild
                        as="template"
                        enter="duration-300 ease-out"
                        enter-from="opacity-0"
                        enter-to="opacity-100"
                        leave="duration-200 ease-in"
                        leave-from="opacity-100"
                        leave-to="opacity-0"
                    >
                        <DialogOverlay
                            class="
                                fixed
                                inset-0
                                bg-gray-900 bg-opacity-50
                                backdrop-filter backdrop-blur-sm
                            "
                        />
                    </TransitionChild>

                    <span
                        class="inline-block h-screen align-middle"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>

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
                            class="
                                inline-block
                                w-full
                                max-w-full
                                p-6
                                my-8
                                overflow-hidden
                                text-left
                                align-middle
                                transition-all
                                transform
                                bg-white
                                shadow-xl
                                md:max-w-xl
                                lg:max-w-2xl
                                rounded-xs
                            "
                        >
                            <slot />
                        </div>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script>
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
} from '@headlessui/vue';

export default {
    emits: ['close'],
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
            default: false,
        },
    },

    setup({}, { emit }) {
        function close(val) {
            emit('close', val);
            emit('update:open', val);
        }

        return { close };
    },
};
</script>
