<template>
    <SwitchGroup>
        <div class="flex flex-col">
            <SwitchLabel class="mr-4">{{ label }}sss</SwitchLabel>
            <Switch
                v-model="enabled"
                :class="{
                    'bg-blue-500 border-blue-500': enabled,
                    'bg-white border-gray-800': !enabled,

                    'text-lg': getSize == 'lg',
                    'text-base': getSize == 'md',
                    'text-xs': getSize == 'sm',

                    'w-14': getSize == 'lg',
                    'w-11': getSize == 'md',
                    'w-9': getSize == 'sm',

                    'h-10  rounded-lg': getSize == 'lg',
                    'h-6  rounded-md': getSize == 'md',
                    'h-4  rounded-sm': getSize == 'sm',
                }"
                class="relative inline-flex items-center transition-all border rounded-full  focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
                <span
                    :class="{
                        'translate-x-6 bg-white': enabled,
                        'translate-x-1 bg-gray-800': !enabled,

                        'w-6 h-6': getSize == 'lg',
                        'w-4 h-4': getSize == 'md',
                        'w-2 h-2': getSize == 'sm',
                    }"
                    class="inline-block w-4 h-4 transition-all transform bg-white rounded-full "
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

    setup() {
        const enabled = ref(false);

        return { enabled };
    },
};
</script>
