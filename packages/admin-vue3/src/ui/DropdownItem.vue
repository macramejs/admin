<template>
    <MenuItem v-slot="{ active }">
        <component
            :is="as"
            :href="href"
            class="dropdown-menu-item"
            :class="[
                active ? 'bg-gray text-white' : 'text-gray-900',
                'group flex rounded-sm items-center w-full px-2 py-2 text-sm',
            ]"
        >
            <slot></slot>
        </component>
    </MenuItem>
</template>

<script>
import { defineComponent } from 'vue';
import { MenuItem } from '@headlessui/vue';

export default defineComponent({
    components: {
        MenuItem,
    },
    props: {
        href: {
            type: String,
            default: null,
        },
    },
    setup(props) {
        const as = props.href ? 'a' : 'button';

        return { as };
    },
});
</script>
