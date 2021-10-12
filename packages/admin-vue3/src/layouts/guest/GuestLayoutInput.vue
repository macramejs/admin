<template>
    <div>
        <Input
            class="w-full py-2 text-gray-900 border-b outline-none border-gray"
            v-bind="$attrs"
        />
        <div v-if="errors">
            <div
                v-for="(error, key) in typeof errors === 'string'
                    ? [errors]
                    : errors"
                :key="key"
                class="text-red"
            >
                {{ error }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Input } from '@macramejs/macrame-vue3';

export default defineComponent({
    components: { Input },
    props: {
        errors: {
            type: [Array, String],
            required: false,
        },
    },
    setup() {
        //
    },
});
</script>
