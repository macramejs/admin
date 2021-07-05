<template>
    <Switch
        :modelValue="modelValue"
        @update:modelValue="update"
        as="template"
        v-slot="{ checked }"
    >
        <div class="inline-flex">
            <div
                :class="{
                    'bg-blue border-blue':
                        (variant_ == null && checked) ||
                        (variant_ == 'blue' && checked),
                    'bg-green border-green': variant_ == 'green' && checked,
                    'bg-red border-red': variant_ == 'red' && checked,
                    'bg-yellow-400': variant_ == 'yellow' && checked,
                    'bg-gray-700 border-gray': variant_ == 'gray' && checked,
                    'bg-white': !checked,

                    'w-5 h-5 mt-px': size_ == 'lg',
                    'w-4 h-4 mt-1': size_ == 'md',
                    'w-3 h-3 mt-1': size_ == 'sm',

                    'border-gray-600': disabled,
                    'border-gray-700 ': !disabled && !checked,
                }"
                class="inline-flex items-center justify-center text-white border  rounded-xs"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="fill-current"
                    :class="{
                        'w-4 h-4': size_ == 'lg',
                        'w-3 h-3': size_ == 'md',
                        'w-2.5 h-2.5': size_ == 'sm',
                    }"
                >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                    />
                </svg>
            </div>
            <label
                class="flex-1 pl-2"
                :class="{
                    'cursor-pointer': !disabled,
                    'text-gray-600 cursor-not-allowed': disabled,
                    'text-sm': size_ == 'sm',
                }"
            >
                <slot>
                    {{ label }}
                </slot>
            </label>
        </div>
    </Switch>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Switch } from '@headlessui/vue';

import { getSize, sizes } from './props/size';
import { getVariant, variants } from './props/variant';

export default defineComponent({
    components: { Switch },
    props: {
        label: {
            type: String,
            default: null,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        modelValue: {
            type: Boolean,
            default: false,
        },
        ...sizes,
        ...variants,
    },
    setup({ disabled, ...props }, { emit }) {
        const size_ = getSize(props, {});
        const variant_ = getVariant(props, {});

        const update = (value) => {
            if (disabled) {
                return;
            }

            emit('update:modelValue', value);
        };

        return { update, size_, variant_ };
    },
});
</script>
