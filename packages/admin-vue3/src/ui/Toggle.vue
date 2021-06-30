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
                    'switch-bg-enabled': enabled,
                    'switch-bg-disabled': !enabled,

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
                        'switch-dot-enabled': enabled,
                        'switch-dot-disabled': !enabled,

                        'w-7 h-7': size_ == 'lg',
                        'w-4 h-4': size_ == 'md',
                        'w-3 h-3': size_ == 'sm',

                        'translate-x-[1px]': size_ == 'lg' && !enabled,
                        'translate-x-px':
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
    },

    setup(props) {
        const enabled = ref(false);
        const size_ = getSize(props, {});

        return { enabled, size_ };
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
