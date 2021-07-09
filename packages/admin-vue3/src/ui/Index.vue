<template>
    <div
        class="w-full bg-white"
        :class="{
            'py-6 rounded-md shadow': rounded,
        }"
    >
        <teleport v-if="isRoot" to="#portal-header-left">
            <Search :table="table" v-bind="$attrs" />
        </teleport>
        <Search v-else :table="table" v-bind="$attrs" />

        <index-table as="ui-table" v-bind="{ ...$attrs }" :table="table" />
        <index-pagination
            as="ui-pagination"
            v-bind="{ ...$attrs }"
            :table="table"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, watchEffect } from 'vue';
import { UseIndexAttrs } from '@macramejs/macrame';
import { Portal, PortalGroup } from '@headlessui/vue';
import {
    useIndex,
    IndexTable,
    IndexSearch,
    IndexPagination,
} from '@macramejs/macrame-vue3';

const Search = defineComponent({
    props: {
        table: {
            type: Object,
            required: true,
        },
    },
    components: { IndexSearch },
    template: `
        <div class="flex items-center h-full pl-6 text-gray-700 focus-within:text-blue">
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    class="absolute w-4 h-4 pointer-events-none fill-current"
                >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                    d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
                />
            </svg>
            <index-search
                as="ui-input"
                v-bind="$attrs"
                :table="table"
                class="h-full pl-6 text-gray-900 outline-none"
            />
        </div>
    `,
});

export default defineComponent({
    components: {
        IndexTable,
        IndexPagination,
        Portal,
        PortalGroup,
        Search,
    },
    props: {
        rounded: {
            type: Boolean,
            default: true,
        },
        isRoot: {
            type: Boolean,
            default: false,
        },
    },
    setup({}, { attrs }) {
        const table = useIndex(<UseIndexAttrs>attrs);

        table.loadItems();

        return { table };
    },
});
</script>
