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
                    'bg-gray-500 border-gray-500': !enabled,
                    'bg-blue-500 border-blue-500':
                        (variant_ == null && enabled) ||
                        (variant_ == 'blue' && enabled),

                    'bg-green-500 border-green-500':
                        variant_ == 'green' && enabled,

                    'bg-red-500 border-red-500': variant_ == 'red' && enabled,

                    'bg-yellow-500 border-yellow-500':
                        variant_ == 'yellow' && enabled,

                    'text-lg': size_ == 'lg',
                    'text-base': size_ == 'md',
                    'text-xs': size_ == 'sm',

                    'w-16': size_ == 'lg',
                    'w-10': size_ == 'md',
                    'w-8': size_ == 'sm',

                    'h-8 rounded-lg': size_ == 'lg',
                    'h-5 rounded-md': size_ == 'md',
                    'h-4 rounded-sm': size_ == 'sm',
                }"
                class="relative inline-flex items-center transition-all border rounded-full  focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
                <span
                    :class="{
                        'w-7 h-7': size_ == 'lg',
                        'w-4 h-4': size_ == 'md',
                        'w-3 h-3': size_ == 'sm',

                        'translate-x-px':
                            (size_ == 'lg' && !enabled) ||
                            (size_ == 'md' && !enabled) ||
                            (size_ == 'sm' && !enabled),

                        'translate-x-[33px]': size_ == 'lg' && enabled,
                        'translate-x-[21px]': size_ == 'md' && enabled,
                        'translate-x-[17px]': size_ == 'sm' && enabled,
                    }"
                    class="inline-block transition-all transform bg-white rounded-full "
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

<style>
.switch-bg-enabled {
    background-color: #4951f2;
    border-color: #4951f2;
}
.switch-bg-disabled {
    background-color: #cfd9e2;
    border-color: #cfd9e2;
}
.switch-dot-enabled {
    background-color: #fff;
}
.switch-dot-disabled {
    background-color: #fff;
}
</style>
