<template>
    <div class="px-8 py-5 mb-4 bg-white rounded cursor-move">
        <div class="flex">
            <IconDraggable class="w-2.5 h-2.5 fill-gray mt-2 mb-4 mr-auto" />
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
        </div>
        <slot />
    </div>
</template>
<script setup lang="ts">
import Card from './Card.vue';
import ContextButton from './ContextButton.vue';
import ContextMenu from './ContextMenu.vue';
import ContextMenuItem from './ContextMenuItem.vue';
import IconDraggable from '../icons/IconDraggable.vue';
import IconTrash from '../icons/IconTrash.vue';

const emit = defineEmits(['destroy']);
</script>
