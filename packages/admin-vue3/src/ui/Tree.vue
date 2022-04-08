<template>
    <Draggable
        tag="div"
        :list="tree.items"
        handle=".handle"
        item-key="uuid"
        v-if="tree"
    >
        <template #item="{ element }">
            <div class="px-2 py-1 bg-white draggable-wrapper">
                <slot :item="element.value" :children="element.children" />
            </div>
        </template>
    </Draggable>
</template>
<script setup lang="ts">
import Draggable from 'vuedraggable';
import { PropType } from 'vue';
import { Tree } from '@macramejs/macrame-vue3';

const props = defineProps({
    tree: {
        required: true,
        type: Object as PropType<Tree>,
    },
});
</script>
