<template>
    <layout>
        <template v-slot:sidebar="{ sidebar }">
            <ul>
                <li>
                    <a href="">Link 1</a>
                </li>
                <li>
                    <a href="">Link 1</a>
                </li>
            </ul>
            <button @click="sidebar.toggle()">Toggle Secondary Sidebar</button>
        </template>
        <template v-slot:header>
            <div>foo</div>
            <div>bar</div>
        </template>
        <template v-slot:header-secondary>
            <div>baz</div>
            <div>boom</div>
        </template>
        <template v-slot:sidebar-secondary>Nested crud</template>
        <template v-slot:default>
            <component
                v-for="(component, index) in components"
                v-bind="component.props"
                :is="component.name"
                :key="index"
            />
        </template>
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
