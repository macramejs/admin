<template>
    <RadioGroup v-model="val">
        <!-- <RadioGroupLabel>Plan</RadioGroupLabel> -->
        <RadioGroupOption
            as="template"
            v-for="option in options"
            :key="optionValue(option)"
            v-slot="{ checked }"
            :value="optionValue(option)"
        >
            <div class="flex">
                <div class="flex items-center w-6 h-6">
                    <div
                        class="
                            flex
                            items-center
                            justify-center
                            w-3.5
                            h-3.5
                            border border-gray-700
                            rounded-lg
                        "
                        :class="{
                            'bg-blue': checked,
                        }"
                    >
                        <div class="w-1 h-1 bg-white rounded-lg"></div>
                    </div>
                </div>
                <RadioGroupLabel as="p" class="flex-1 cursor-pointer">
                    {{ optionLabel(option) }}
                </RadioGroupLabel>
            </div>
        </RadioGroupOption>
    </RadioGroup>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue';

export default defineComponent({
    components: { RadioGroup, RadioGroupLabel, RadioGroupOption },
    props: {
        label_key: {
            type: String,
            default: null,
        },
        value_key: {
            type: String,
            default: null,
        },
        options: {
            type: Array,
            default: () => [],
        },
    },

    setup(props, { attrs }) {
        const val = ref();

        const optionValue = (option) => {
            if (props.value_key === null) {
                return option;
            }

            return option[props.value_key];
        };

        const optionLabel = (option) => {
            if (props.label_key === null) {
                return option;
            }

            return option[props.label_key];
        };

        return { val, optionValue, optionLabel };
    },
});
</script>
