<template>
    <Listbox as="div" v-slot="{ open }" class="relative">
        <ListboxButton
            @click="toggleMenu()"
            class="px-[18px] mcr-select-button z-0 w-full transition-colors duration-200 bg-transparent focus:outline-none focus:input-focused text-indigo-900 py-[22px]"
            :class="{
                'cursor-not-allowed': disabled,
                'has-errors': errors?.length > 0 && !disabled,
            }"
        >
            <div
                class="absolute flex gap-2 top-1/2 -translate-y-1/2 left-[18px]"
            >
                <div
                    class="h-[26px] z-10 px-3 py-2 flex w-fit items-center gap-2 transition-colors bg-orange bg-opacity-30 focus:outline-none text-orange duration-200 rounded-full leading-none text-sm"
                    v-for="(chip, i) in activeItemLabels"
                >
                    <span class="inline-block">
                        {{ chip }}
                    </span>
                    <svg
                        @click="deleteChip(i)"
                        class="cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-6 -6 24 24"
                        width="16"
                        fill="currentColor"
                    >
                        <path
                            d="M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z"
                        ></path>
                    </svg>
                </div>
            </div>
            <div
                class="absolute top-0 left-0 right-0 flex w-full h-full max-w-full pointer-events-none"
            >
                <div
                    class="border-l input-section-1 border-t border-b border-gray-900 w-[16px] h-full rounded-l-[8px]"
                ></div>
                <div
                    class="relative h-full px-1 border-t border-b border-gray-900 input-width input-section-2"
                    :class="{
                        '!border-t-transparent': selectedItems?.length > 0,
                        'border-t-gray-900': !selectedItems?.length > 0,
                    }"
                >
                    <div
                        class="relative inline-block text-sm transition duration-200 origin-left whitespace-nowrap will-change-auto h-fit top-1/2"
                        :class="{
                            'text-ellipsis !-translate-y-[35px] !scale-100 text-indigo-900':
                                selectedItems?.length > 0,
                            'max-w-full -translate-y-[13px] scale-[1.34] text-gray-500':
                                !selectedItems?.length > 0,
                            '!text-red-signal':
                                (selectedItems?.length > 0 &&
                                    errors?.length > 0 &&
                                    !disabled) ||
                                (errors?.length > 0 && !disabled),
                        }"
                    >
                        {{ label }}
                    </div>
                </div>
                <div
                    class="border-r border-t input-section-3 border-b focus:border-orange border-gray-900 flex-grow rounded-r-[8px] h-full"
                ></div>
            </div>
            <span
                v-if="selectedItems?.length > 0"
                class="absolute inline-block -translate-y-1/2 left-5"
            >
                {{ itemLabel }}
            </span>
            <span
                class="absolute inline-block -translate-y-1/2 mcr-select-arrow right-5"
            >
                <svg
                    class="transition-transform duration-200"
                    :class="{ 'rotate-180': menuActive }"
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

        <div v-if="menuActive">
            <ListboxOptions
                static
                class="absolute focus:outline-none max-h-[126px] overflow-y-auto bg-white w-full mt-2 shadow rounded-[8px] py-4 z-10"
            >
                <ListboxOption @click="selectedItems = []">
                    <button
                        class="relative flex items-center w-full text-left hover:bg-gray-200"
                    >
                        <div class="w-full px-5 py-2">Auswahl zurücksetzen</div>
                    </button>
                </ListboxOption>
                <ListboxOption v-for="(option, i) in options">
                    <label
                        class="relative flex items-center justify-between w-full px-5 py-2 cursor-pointer hover:bg-gray-200"
                    >
                        <div class="">
                            {{ option.label }}
                        </div>
                        <input
                            type="checkbox"
                            :id="`selected-${i}`"
                            class="absolute mr-2 opacity-0"
                            :value="option.value"
                            v-model="selectedItems"
                        />
                        <div class="hidden check-icon">
                            <svg
                                width="24"
                                height="24"
                                class="origin-right scale-75"
                                stroke-width="1.5"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="m5 13 4 4L19 7"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </div>
                    </label>
                </ListboxOption>
            </ListboxOptions>
        </div>
    </Listbox>
</template>

<script lang="ts" setup>
import { ref, watch, toRefs, onBeforeMount, computed } from 'vue';
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: {
        type: Array,
    },
    options: {
        type: Array,
        default: null,
    },
    errors: {
        type: [Array, String],
        default: null,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    label: {
        type: String,
        default: 'Label',
    },
});

const deleteChip = (index: number) => {
    selectedItems.value.splice(index, 1);
    menuActive.value = true;
};

const activeItemLabels = computed(() => {
    let labels = [];
    if (selectedItems.value.length == 0 || !selectedItems.value) {
        return labels;
    }
    props.options.forEach((option: { label: string; value: string }) => {
        if (selectedItems.value.includes(option.value)) {
            labels.push(option.label);
        }
    });
    return labels;
});

const selectedItems = ref([]);

const menuActive = ref(false);

const toggleMenu = () => {
    menuActive.value = !menuActive.value;
};

const { modelValue } = toRefs(props);
watch(modelValue, () => {
    selectedItems.value = modelValue.value;
});

watch(selectedItems, () => {
    emit('update:modelValue', selectedItems.value);
});
</script>

<style scoped>
.mcr-select-button:focus > div > .input-section-1 {
    border-color: #fead5e;
}
.mcr-select-button:focus > div > .input-section-2 {
    border-bottom-color: #fead5e;
    border-top-color: #fead5e;
}
.mcr-select-button:focus > div > .input-section-2 > label {
    color: #fead5e;
}
.mcr-select-button:focus > div > .input-section-3 {
    border-color: #fead5e;
}
.mcr-select-button:focus .mcr-select-arrow {
    color: #fead5e;
}
input:checked + .check-icon {
    display: block !important;
}

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
