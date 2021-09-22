<template>
    <div>
        <slot name="search">
            <Input v-model.debounce="table.search" />
        </slot>
        <slot />
        <slot name="pagination">
            <Pagination :table="table" />
        </slot>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Index } from '@macramejs/macrame-vue3';
import Input from './Input.vue';
import Pagination from './Pagination.vue';

type IndexProps = {
    table: Index;
};

export default defineComponent({
    components: {
        Input,
        Pagination,
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
