<template>
    <div class="relative flex justify-between" :class="{ 'mb-3': collapsed }">
        <div
            class="absolute w-[0%] h-full ml-2 transition-all duration-200 pl-11"
            :class="{
                '!w-full': collapsed,
            }"
        >
            <div class="w-full h-full bg-white rounded-sm"></div>
        </div>
        <div class="relative z-10 flex items-center">
            <div
                class="flex items-center justify-center w-8 h-8 mr-3 overflow-hidden bg-white rounded cursor-move handle hover:bg-gray-200"
            >
                <IconDraggable class="w-2.5 h-2.5 fill-gray-700" />
            </div>
            <div @click="collapsed = !collapsed" class="cursor-pointer">
                <slot name="title">
                    <span class="text-lg font-medium"> {{ title }} </span>
                </slot>
            </div>
        </div>
        <div class="z-10 flex items-center space-x-2">
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
                class="flex items-center justify-center w-6 h-6 transition-transform duration-150 transform rotate-0 bg-transparent rounded hover:bg-gray-800 group hover:text-white"
                @click="collapsed = !collapsed"
            >
                <IconCaret
                    class="w-2.5 h-2.5"
                    :class="{
                        ' rotate-180': collapsed,
                    }"
                />
            </div>
        </div>
    </div>

    <div v-if="!collapsed" class="flex">
        <div class="flex justify-center w-8 mr-3">
            <div class="w-[1px] h-full border-r border-gray-300"></div>
        </div>
        <div class="flex-1 mt-3 mb-6">
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
