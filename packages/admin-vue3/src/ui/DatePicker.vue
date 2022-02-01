<template>
    <DatePicker
        v-bind="$attrs"
        v-slot="{ inputValue, inputEvents }"
        class="relative"
        is-dark
        color="orange"
    >
        <span
            v-if="label"
            class="absolute inline-block text-gray-900 transition-all duration-200 -translate-y-1/2 bg-"
            :class="{
                'top-1/2 left-[18px]': !inputValue,
                'top-px left-[16px] bg-gray-50 p-1 text-xs': inputValue,
            }"
        >
            {{ label }}
        </span>
        <input
            :value="inputValue"
            v-on="inputEvents"
            class="px-[18px] border transition-colors z-10 w-full duration-200 focus:outline-none rounded text-indigo-900 py-2.5"
            :class="{
                'border-gray-500 bg-gray-50': disabled,
                'border-gray-900 bg-gray-50 focus:border-orange-700':
                    errors.length == 0 && !disabled,
                'border-red-signal bg-gray-50': errors.length > 0 && !disabled,
            }"
        />
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
