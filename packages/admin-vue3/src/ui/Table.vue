<template>
    <table class="table w-full">
        <thead class="sticky top-0 text-left text-gray-700 bg-white thead">
            <tr>
                <th v-if="table.selectable" class="pl-6 slim">
                    <ui-checkbox @input="toggleAll()" sm />
                </th>
                <base-th
                    v-for="(column, thKey) in schema"
                    :key="`th-${thKey}`"
                    :column="column"
                    :class="{
                        'pl-6': !table.selectable,
                    }"
                    class="pr-4 text-xs font-normal h-7"
                />
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="(item, trKey) in table.items"
                :key="`th-${trKey}`"
                class="bg-gray-100 odd:bg-white"
            >
                <td v-if="table.selectable" class="pl-6 slim">
                    <ui-checkbox
                        sm
                        :value="item[selectable]"
                        v-model="selected"
                        class="mr-6"
                        :id="`_${item[selectable]}`"
                    />
                    <label :for="`_${item[selectable]}`" />
                </td>
                <base-td
                    v-for="(column, tdKey) in schema"
                    :key="`td-${tdKey}`"
                    :column="column"
                    :item="item"
                    :class="{
                        'pl-6': !table.selectable,
                    }"
                    class="py-4 pr-4"
                />
            </tr>
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
            required: true,
        },
    },
});
</script>

<style>
.table .slim {
    width: 1%;
    white-space: nowrap;
}
.table .thead {
    box-shadow: inset 0px -1px 0px #e5eaef;
}
</style>
