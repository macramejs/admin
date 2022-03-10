<template>
    <GuestLayout>
        <div class="text-sm text-gray-600">{{ lang.message }}</div>
        <div v-if="status" class="mb-4 text-sm font-medium text-green-600">
            {{ status }}
        </div>
        <form @submit.prevent="form.submit">
            <Input
                autofocus
                required
                class=""
                :label="lang.email"
                type="email"
                autocomplete="username"
                v-model="form.email"
                :errors="form.errors?.email"
            />
            <div class="flex justify-center mt-5">
                <Button
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                >
                    {{ lang.send_reset_link }}
                </Button>
            </div>
        </form>
    </GuestLayout>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { useForm } from '@macramejs/macrame-vue3';

import GuestLayout from '../../layouts/guest/GuestLayout.vue';
import Input from '../../layouts/guest/GuestLayoutInput.vue';
import Checkbox from '../../ui/CheckboxSwitch.vue';
import Button from '../../ui/Button.vue';

interface Lang {
    message: string;
    email: string;
    send_reset_link: string;
}

export default defineComponent({
    components: { GuestLayout, Input, Checkbox, Button },
    props: {
        submitRoute: {
            type: String,
            required: true,
        },
        lang: {
            type: Object as PropType<Lang>,
            default: {
                message:
                    'Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.',
                email: 'Email',
                send_reset_link: 'Send Password Reset Link',
            },
        },
        status: String,
    },
    setup({ submitRoute }) {
        const form = useForm(
            submitRoute,
            { email: '', password: '', remember: false },
            { method: 'post' }
        );

        return { form };
    },
});
</script>
