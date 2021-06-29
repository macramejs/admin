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
                    'bg-blue-500 border-blue-500': enabled,
                    'bg-white border-gray-800': !enabled,

                    'text-lg': size_ == 'lg',
                    'text-base': size_ == 'md',
                    'text-xs': size_ == 'sm',

                    'w-14': size_ == 'lg',
                    'w-11': size_ == 'md',
                    'w-9': size_ == 'sm',

                    'h-10  rounded-lg': size_ == 'lg',
                    'h-6  rounded-md': size_ == 'md',
                    'h-4  rounded-sm': size_ == 'sm',
                }"
                class="
                    relative
                    inline-flex
                    items-center
                    transition-all
                    border
                    rounded-full
                    focus:outline-none focus:ring-4 focus:ring-blue-300
                "
            >
                <span
                    :class="{
                        'translate-x-6 bg-white': enabled,
                        'translate-x-1 bg-gray-800': !enabled,

                        'w-6 h-6': size_ == 'lg',
                        'w-4 h-4': size_ == 'md',
                        'w-2 h-2': size_ == 'sm',
                    }"
                    class="
                        inline-block
                        w-4
                        h-4
                        transition-all
                        transform
                        bg-white
                        rounded-full
                    "
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
