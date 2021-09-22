<template>
    <table class="table w-full">
        <thead class="sticky top-0 text-left text-gray-700 bg-white thead">
            <slot name="thead">
                <tr>
                    <base-th
                        v-for="(column, thKey) in schema"
                        :key="`th-${thKey}`"
                        :column="column"
                    />
                </tr>
            </slot>
        </thead>
        <tbody>
            <slot name="tbody" :items="table.items">
                <tr v-for="(item, trKey) in table.items" :key="`th-${trKey}`">
                    <base-td
                        v-for="(column, tdKey) in schema"
                        :key="`td-${tdKey}`"
                        :column="column"
                        :item="item"
                    />
                </tr>
            </slot>
        </tbody>
    </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Th as BaseTh, Td as BaseTd, Index } from '@macramejs/macrame-vue3';
import { Component } from '@macramejs/macrame';

export default defineComponent({
    components: { BaseTh, BaseTd },
    props: {
        table: {
            type: Object as PropType<Index>,
            required: true,
        },
        schema: {
            type: Array as PropType<Component[]>,
            required: false,
        },
    },
});
</script>
