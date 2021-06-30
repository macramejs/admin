<template>
    <div class="text-left">
        <Menu as="div" class="relative inline-block">
            <MenuButton>
                <slot name="button">{{ text }}</slot>
            </MenuButton>

            <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
            >
                <MenuItems
                    :class="{
                        'left-0 origin-top-left': left || !right,
                        'right-0 origin-top-right': !left || right,
                    }"
                    class="absolute w-56 p-2 bg-white rounded-md shadow  dropdown-menu-items focus:outline-none"
                >
                    <slot />
                </MenuItems>
            </transition>
        </Menu>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { getVariant, variants } from './props/variant';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';

export default defineComponent({
    components: {
        Menu,
        MenuButton,
        MenuItems,
        MenuItem,
    },
    props: {
        text: {
            type: Text,
            default: null,
        },
        left: {
            type: Boolean,
            default: false,
        },
        right: {
            type: Boolean,
            default: false,
        },
        ...variants,
    },
    setup(props, { attrs }) {
        const variant_ = getVariant(props, {});

        return { variant_ };
    },
});
</script>
