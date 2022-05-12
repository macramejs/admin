<template>
    <Listbox
        v-slot="{ open }"
        v-if="itemLabel"
        :disabled="disabled"
        v-model="selectedItem"
        class="w-16"
    >
        <div class="relative">
            <ListboxButton
                class="px-3.5 flex items-center justify-between rounded z-10 w-full transition-colors duration-200 bg-gray-200 focus:outline-none focus:input-focused text-indigo-900 py-3"
                :class="{
                    'cursor-not-allowed': disabled,
                    'has-errors': errors?.length > 0 && !disabled,
                }"
            >
                <span v-if="selectedItem" class="inline-block text-sm">
                    {{ itemLabel }}
                </span>
                <span class="inline-block mcr-select-arrow">
                    <svg
                        class="transition-transform duration-200"
                        :class="{ 'rotate-180': open }"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-5 -8 24 24"
                        width="16"
                        fill="currentColor"
                    >
                        <path
                            d="M7.071 5.314l4.95-4.95a1 1 0 1 1 1.414 1.414L7.778 7.435a1 1 0 0 1-1.414 0L.707 1.778A1 1 0 1 1 2.121.364l4.95 4.95z"
                        ></path>
                    </svg>
                </span>
            </ListboxButton>

            <transition
                leave-active-class="transition duration-200 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <ListboxOptions
                    class="absolute right-0 z-40 w-28 mt-2 py-2.5 overflow-auto rounded-[8px] bg-gray-200 shadow max-h-48 focus:outline-none"
                >
                    <ListboxOption
                        v-slot="{ active, selected }"
                        v-for="(item, key) in options"
                        :value="getItemValue(item)"
                        as="template"
                        :key="key"
                    >
                        <button
                            @click="changeLanguageTo(getItemValue(item))"
                            :class="[
                                selected ? 'bg-gray-300' : 'hover:bg-gray-300',
                                active ? 'bg-gray-300' : 'hover:bg-gray-300',
                                'cursor-pointer w-full select-none relative',
                            ]"
                        >
                            <span
                                :class="[
                                    selected
                                        ? 'text-indigo-900'
                                        : 'text-gray-500',
                                    'block truncate py-[5px] px-4',
                                ]"
                            >
                                {{ getItemLabel(item) }}
                            </span>
                        </button>
                    </ListboxOption>
                </ListboxOptions>
            </transition>
        </div>
    </Listbox>
</template>

<script lang="ts" setup>
import { defineEmits, computed, watch, ref, PropType } from 'vue';
import {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
} from '@headlessui/vue';

interface Option {
    value: string;
    label: string;
}

const emit = defineEmits(['update:modelValue', 'change']);

const props = defineProps({
    modelValue: {},
    options: {
        type: Array as PropType<Option[]>,
        required: true,
    },
    label: {
        type: String,
        default: null,
    },
    labelKey: {
        type: String,
        default: 'label',
    },
    valueKey: {
        type: String,
        default: 'value',
    },
    errors: {
        type: [Array, String],
        default: null,
    },
    placeholder: {
        type: String,
        default: 'Wählen Sie eine Option',
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});

const getItemValue = (item: any) => {
    if (props.valueKey) {
        return item[props.valueKey];
    }
    return item;
};
const getItemLabel = (item: any) => {
    if (props.labelKey) {
        return item[props.labelKey];
    }
    return item;
};
const itemLabel = computed(() => {
    if (!props.modelValue) {
        return props.placeholder;
    }
    if (props.valueKey) {
        let selectedOption: any = props.options.find(
            (option: any) => option[props.valueKey] == props.modelValue
        );

        return selectedOption
            ? selectedOption[props.labelKey]
            : props.modelValue;
    }
    return props.modelValue;
});

const changeLanguageTo = (locale: string) => {
    // TODO: Add language change
    console.log(`should change language to ${locale}`);
};

const selectedItem = ref(props.modelValue);

watch(selectedItem, () => {
    emit('update:modelValue', selectedItem.value);
    emit('change');
});
</script>

<style scoped>
.input-width {
    flex: 0 0 auto;
    max-width: calc(100% - 12px * 2);
}
.input-width-focused {
    max-width: calc(100% * 0.75);
}
.mcr-select-button.has-errors .mcr-select-arrow {
    color: #f74b6d;
}
.mcr-select-button.has-errors > div > .input-section-1 {
    border-color: #f74b6d;
}
.mcr-select-button.has-errors > div > .input-section-2 {
    border-bottom-color: #f74b6d;
    border-top-color: #f74b6d;
    color: #f74b6d;
}
.mcr-select-button.has-errors > div > .input-section-3 {
    border-color: #f74b6d;
}
</style>
