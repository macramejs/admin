<template>
    <textarea
        v-bind="$attrs"
        class="bg-white border w-full focus:outline-none focus:ring-4 focus:ring-orange-100 h-[150px] overflow-y-auto rounded-[8px] p-5"
        :class="{
            'border-red-signal': errors.length > 0,
            'border-gray-500': errors.length == 0,
        }"
        :value="modelValue"
        @input="updateValue"
    />
</template>

<script lang="ts" setup>
const emits = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: String,
    errors: {
        type: Array,
        default: [],
    },
    hint: {
        type: String,
        default: null,
    },
});

const updateValue = (event) => {
    emits('update:modelValue', event.target.value);
};
</script>
