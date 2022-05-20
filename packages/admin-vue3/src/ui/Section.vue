<template>
    <div class="p-6 mb-4 bg-white rounded">
        <div class="flex justify-between">
            <div class="flex items-center space-x-3">
                <div
                    class="cursor-move hover:bg-gray-200 flex items-center justify-center h-8 w-8 rounded bg-gray-100"
                >
                    <IconDraggable class="w-2.5 h-2.5 fill-gray-700" />
                </div>
                <slot name="title">
                    <span class="font-medium text-lg"> {{ title }} </span>
                </slot>
            </div>
            <div class="flex items-center space-x-2">
                <ContextMenu>
                    <template #button>
                        <ContextButton />
                    </template>
                    <ContextMenuItem
                        class="hover:bg-red-signal text-red-signal"
                        @click="emit('destroy')"
                    >
                        <template #icon>
                            <IconTrash class="origin-left scale-75" />
                        </template>
                        <span>Delete</span>
                    </ContextMenuItem>
                </ContextMenu>
                <div
                    class="flex items-center justify-center w-6 h-6 bg-transparent rounded hover:bg-gray-800 group hover:text-white transition-transform duration-150 transform rotate-0"
                    @click="collapsed = !collapsed"
                >
                    <IconCaret
                        class="w-2.5 h-2.5 fill-gray-700"
                        :class="{
                            ' rotate-180': collapsed,
                        }"
                    />
                </div>
            </div>
        </div>
        <div v-if="!collapsed" class="mt-4">
            <slot />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import ContextButton from './ContextButton.vue';
import ContextMenu from './ContextMenu.vue';
import ContextMenuItem from './ContextMenuItem.vue';
import IconDraggable from '../icons/IconDraggable.vue';
import IconTrash from '../icons/IconTrash.vue';
import IconCaret from '../icons/IconCaret.vue';

const props = defineProps({
    title: {
        type: String,
        default: null,
    },
});

const emit = defineEmits(['destroy']);

const collapsed = ref(false);
</script>
