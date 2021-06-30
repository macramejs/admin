<template>
    <SwitchGroup>
        <div class="inline-flex flex-col">
            <SwitchLabel class="mr-4">
                <slot> {{ label }} </slot>
            </SwitchLabel>
            <Switch
                :modelValue="modelValue"
                @update:modelValue="update"
                :class="{
                    'bg-gray-500': !modelValue,
                    'bg-blue-500':
                        (variant_ == null && modelValue) ||
                        (variant_ == 'blue' && modelValue),

                    'bg-green-500': variant_ == 'green' && modelValue,

                    'bg-red-500': variant_ == 'red' && modelValue,

                    'bg-yellow-500': variant_ == 'yellow' && modelValue,

                    'text-lg': size_ == 'lg',
                    'text-base': size_ == 'md' || size_ == null,
                    'text-xs': size_ == 'sm',

                    'w-16': size_ == 'lg',
                    'w-10': size_ == 'md' || size_ == null,
                    'w-8': size_ == 'sm',

                    'h-8 rounded-lg': size_ == 'lg',
                    'h-5 rounded-md': size_ == 'md' || size_ == null,
                    'h-4 rounded-sm': size_ == 'sm',
                }"
                class="relative inline-flex items-center transition-all rounded-full  focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
                <span
                    :class="{
                        'w-8 h-8': size_ == 'lg',
                        'w-5 h-5': size_ == 'md',
                        'w-4 h-4': size_ == 'sm',

                        'border-blue-500':
                            (variant_ == 'blue' && modelValue) ||
                            (variant_ == null && modelValue),
                        'border-green-500': variant_ == 'green' && modelValue,
                        'border-yellow-500': variant_ == 'yellow' && modelValue,
                        'border-red-500': variant_ == 'red' && modelValue,
                        'border-gray-500': !modelValue,

                        'translate-x-0':
                            (size_ == 'lg' && !modelValue) ||
                            (size_ == 'md' && !modelValue) ||
                            (size_ == 'sm' && !modelValue),

                        'translate-x-8': size_ == 'lg' && modelValue,
                        'translate-x-5': size_ == 'md' && modelValue,
                        'translate-x-4': size_ == 'sm' && modelValue,
                    }"
                    class="inline-block transition-all transform bg-white border-2 rounded-full "
                />
            </Switch>
        </div>
    </SwitchGroup>
</template>

<script>
import { ref } from 'vue';
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue';
import { getSize, sizes } from './props/size';
import { getVariant, variants } from './props/variant';

export default {
    components: { Switch, SwitchGroup, SwitchLabel },
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
};
</script>
