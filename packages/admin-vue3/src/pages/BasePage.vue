<template>
    <layout>
        <template v-slot:header-left> foo </template>
        <template v-slot:header-right> bar </template>
        <template v-slot:header-secondary-left> baz </template>
        <template v-slot:header-secondary-right> boom </template>
        <template v-slot:sidebar-secondary> Nested crud </template>
        <template v-slot:sidebar-right> Filter </template>
        <component
            v-for="(component, index) in components"
            v-bind="component.props"
            :is="component.name"
            :key="index"
        />
    </layout>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Component } from '@macramejs/macrame';
import Layout from '../layouts/Layout.vue';
export default defineComponent({
    components: { Layout },
    name: 'BasePage',
    props: {
        components: {
            required: true,
            type: Array as PropType<Component[]>,
        },
    },
});
</script>
