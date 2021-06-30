<template>
    <SwitchGroup>
        <div class="inline-flex flex-col">
            <SwitchLabel class="mr-4">
                <slot>
                    {{ label }}
                </slot>
            </SwitchLabel>
            <Switch
                v-model="enabled"
                :class="{
                    'bg-gray-500': !enabled,
                    'bg-blue-500':
                        (variant_ == null && enabled) ||
                        (variant_ == 'blue' && enabled),

                    'bg-green-500': variant_ == 'green' && enabled,

                    'bg-red-500': variant_ == 'red' && enabled,

                    'bg-yellow-500': variant_ == 'yellow' && enabled,

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
                            (variant_ == 'blue' && enabled) ||
                            (variant_ == null && enabled),
                        'border-green-500': variant_ == 'green' && enabled,
                        'border-yellow-500': variant_ == 'yellow' && enabled,
                        'border-red-500': variant_ == 'red' && enabled,
                        'border-gray-500': !enabled,

                        'translate-x-0':
                            (size_ == 'lg' && !enabled) ||
                            (size_ == 'md' && !enabled) ||
                            (size_ == 'sm' && !enabled),

                        'translate-x-[32px]': size_ == 'lg' && enabled,
                        'translate-x-[20px]': size_ == 'md' && enabled,
                        'translate-x-[16px]': size_ == 'sm' && enabled,
                    }"
                    class="inline-block transition-all transform bg-white border rounded-full "
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
        square: {
            type: Boolean,
            default: false,
        },
        ...sizes,
        ...variants,
    },

    setup(props) {
        const enabled = ref(false);
        const size_ = getSize(props, {});
        const variant_ = getVariant(props, {});

        return { enabled, size_, variant_ };
    },
};
</script>
