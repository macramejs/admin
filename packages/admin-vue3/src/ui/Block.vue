<template>
    <div class="-mx-8">
        <Draggable
            v-model="block.items"
            :component-data="{ class: 'flex flex-col space-y-1' }"
        >
            <template #item="{ element }">
                <div class="relative px-8 bg-white repeatable">
                    <div
                        class="absolute left-0 flex justify-center w-8 h-full text-gray-600  top-6 cursor-grab"
                    >
                        <svg
                            viewBox="0 0 15 6"
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-3 h-2 fill-current"
                        >
                            <path d="M0 0h15v2H0zM0 4h15v2H0z" />
                        </svg>
                    </div>
                    <Disclosure v-slot="{ open }">
                        <DisclosureButton
                            class="flex items-center justify-between w-full py-4 text-left bg-gray-300  focus:outline-none"
                        >
                            <div>
                                {{ element.title }}
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                class="w-4 h-4 text-gray-600 duration-100 ease-in-out transform fill-current "
                                :class="{
                                    'rotate-0': !open,
                                    'rotate-180': open,
                                }"
                            >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                    d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
                                />
                            </svg>
                        </DisclosureButton>

                        <DisclosurePanel> foo </DisclosurePanel>
                    </Disclosure>
                    <button
                        class="absolute flex items-center justify-center w-6 h-6 text-gray-600  hover:bg-gray-100 rounded-xs top-4 right-16"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            class="w-3 h-3 fill-current"
                        >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                                d="M7 6V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5zm2-2v2h6V4H9z"
                            />
                        </svg>
                    </button>
                </div>
            </template>
        </Draggable>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import Draggable from 'vuedraggable';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
export default defineComponent({
    components: { Disclosure, DisclosureButton, DisclosurePanel, Draggable },
    props: {
        block: {
            type: Object,
            required: true,
        },
    },
    setup() {
        //
    },
});
</script>

<style>
.repeatable::before {
    content: '';
    position: absolute;
    left: 0;
    height: 100%;
    width: 0px;
    background: white;
}
.repeatable .repeatable::before {
    width: 3px;
}
.repeatable .repeatable .repeatable::before {
    width: 6px;
}
</style>
