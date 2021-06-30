<template>
    <div>
        <FieldTitle v-bind="$attrs" />
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FieldTitle } from '@macramejs/macrame-vue3';

export default defineComponent({
    components: { FieldTitle },
    setup(props, { attrs }) {
        //
    },
});
</script>
