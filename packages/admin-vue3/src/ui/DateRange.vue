<template>
    <DatePicker
        v-bind="$attrs"
        :columns="2"
        is-range
        is-dark
        color="orange"
        class="z-10 w-full"
    >
        <template v-slot="{ inputValue, inputEvents }">
            <div class="flex items-center justify-center w-full">
                <div class="relative w-full">
                    <span
                        class="absolute inline-block text-gray-900 transition-all duration-200 -translate-y-1/2 bg-"
                        :class="{
                            'top-1/2 left-[18px]': !inputValue.start,
                            'top-px left-[16px] bg-gray-50 p-1 text-xs':
                                inputValue.start,
                        }"
                    >
                        Start
                    </span>
                    <input
                        :value="inputValue.start"
                        v-on="inputEvents.start"
                        class="px-[18px] border z-10 transition-colors w-full duration-200 focus:outline-none rounded text-indigo-900 py-2.5"
                        :class="{
                            'border-gray-500 bg-gray-50': disabled,
                            'border-gray-900 bg-gray-50 focus:border-orange-700':
                                errors.length == 0 && !disabled,
                            'border-red-signal bg-gray-50':
                                errors.length > 0 && !disabled,
                        }"
                    />
                </div>
                <svg
                    class="w-4 h-4 mx-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                </svg>
                <div class="relative w-full">
                    <span
                        class="absolute inline-block text-gray-900 transition-all duration-200 -translate-y-1/2 bg-"
                        :class="{
                            'top-1/2 left-[18px]': !inputValue.end,
                            'top-px left-[16px] bg-gray-50 p-1 text-xs':
                                inputValue.end,
                        }"
                    >
                        Ende
                    </span>
                    <input
                        :value="inputValue.end"
                        v-on="inputEvents.end"
                        class="px-[18px] border z-10 transition-colors w-full duration-200 focus:outline-none rounded text-indigo-900 py-2.5"
                        :class="{
                            'border-gray-500 bg-gray-50': disabled,
                            'border-gray-900 bg-gray-50 focus:border-orange-700':
                                errors.length == 0 && !disabled,
                            'border-red-signal bg-gray-50':
                                errors.length > 0 && !disabled,
                        }"
                    />
                </div>
            </div>
        </template>
    </DatePicker>
    <div
        v-if="hint && errors.length == 0"
        class="ml-[18px] mt-1 text-xs text-gray-500"
    >
        {{ hint }}
    </div>
    <div
        v-if="errors.length > 0"
        class="ml-[18px] mt-1 text-xs text-red-signal"
    >
        <div v-for="error in errors">
            {{ error }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { DatePicker } from 'v-calendar';
import 'v-calendar/dist/style.css';
import Input from './Input.vue';

defineProps({
    label: {
        type: String,
        default: null,
    },
    hint: {
        type: String,
        default: null,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    errors: {
        type: Array,
        default: [],
    },
});
</script>
