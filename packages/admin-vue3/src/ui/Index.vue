<template>
    <div>
        <slot name="search">
            <Search :table="table" />
        </slot>
        <div class="py-6 rounded-md shadow w-full bg-white">
            <slot />
            <slot name="footer">
                <span class="text-gray">
                    {{ table.fromItem }}-{{ table.toItem }}/{{
                        table.totalItems
                    }}
                </span>
            </slot>
        </div>
        <slot name="pagination">
            <Pagination :table="table" />
        </slot>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Index } from '@macramejs/macrame-vue3';
import Pagination from './Pagination.vue';
import Search from './Search.vue';

type IndexProps = {
    table: Index;
};

export default defineComponent({
    components: {
        Pagination,
        Search,
    },
    props: {
        table: {
            type: Object as PropType<Index>,
            required: true,
        },
    },
    setup({}: IndexProps, {}) {
        //

        return {};
    },
});
</script>
