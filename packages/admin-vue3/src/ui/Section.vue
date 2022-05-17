<template>
    <Card class="p-4 px-8 cursor-move mb-4">
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
    </Card>
</template>
<script setup lang="ts">
import Card from './Card.vue';
import ContextButton from './ContextButton.vue';
import ContextMenu from './ContextMenu.vue';
import ContextMenuItem from './ContextMenuItem.vue';
import IconDraggable from './IconDraggable.vue';
import IconTrash from './IconTrash.vue';

const emit = defineEmits(['destroy']);
</script>
