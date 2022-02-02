<template>
    <div class="">
        <FormField :errors="errors" no-label>
            <Input
                :errors="typeof errors === 'string' ? [errors] : errors"
                class="w-full"
                v-bind="$attrs"
            />
        </FormField>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Input, FormField } from '@macramejs/admin-vue3';

export default defineComponent({
    components: { Input, FormField },
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
