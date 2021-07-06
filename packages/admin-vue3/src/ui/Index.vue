<template>
    <div
        class="w-full bg-white"
        :class="{
            'py-6 rounded-md shadow': rounded,
        }"
    >
        <index-search
            as="ui-input"
            v-bind="{ ...$attrs }"
            :table="table"
            class="hidden"
        />

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
import {
    useIndex,
    IndexTable,
    IndexSearch,
    IndexPagination,
} from '@macramejs/macrame-vue3';
import { indexsearch } from './index.search';
const debounce = require('lodash.debounce');
export default defineComponent({
    components: {
        IndexSearch,
        IndexTable,
        IndexPagination,
    },
    props: {
        rounded: {
            type: Boolean,
            default: true,
        },
    },
    setup(props, { attrs }) {
        const table = useIndex(<UseIndexAttrs>attrs);

        table.loadItems();

        watch(indexsearch, (indexsearch, old) => {
            search(indexsearch);
        });

        const search = debounce((indexsearch) => {
            table.updateSearch(indexsearch);
        }, 200);

        return { table, indexsearch };
    },
});
</script>
