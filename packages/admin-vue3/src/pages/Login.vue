<template>
    <GuestLayout>
        <form @submit.prevent="form.submit">
            <Input
                autofocus
                required
                class="mb-3"
                type="email"
                autocomplete="username"
                v-model="form.email"
                :placeholder="lang.email"
                :errors="form.errors?.email"
            />
            <Input
                required
                class="mb-3"
                type="password"
                autocomplete="username"
                v-model="form.password"
                :placeholder="lang.password"
                :errors="form.errors?.password"
            />
            <div class="flex justify-between">
                <Checkbox sm :label="lang.remember" v-model="form.remember" />
                <a
                    v-if="forgotPasswordRoute"
                    :href="forgotPasswordRoute"
                    class="text-right"
                >
                    {{ lang.forgot_password }}
                </a>
            </div>
            <div class="flex justify-center mt-5">
                <Button
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                >
                    {{ lang.login }}
                </Button>
            </div>
        </form>
    </GuestLayout>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { useForm } from '@macramejs/macrame-vue3';

import GuestLayout from '../layouts/guest/GuestLayout.vue';
import Input from '../layouts/guest/GuestLayoutInput.vue';
import Checkbox from '../ui/CheckboxSwitch.vue';
import Button from '../ui/Button.vue';

interface Lang {
    login: string;
    email: string;
    password: string;
    remember: string;
    forgot_password: string;
}

export default defineComponent({
    components: { GuestLayout, Input, Checkbox, Button },
    props: {
        submitRoute: {
            type: String,
            required: true,
        },
        forgotPasswordRoute: {
            type: String,
        },
        lang: {
            type: Object as PropType<Lang>,
            default: {
                login: 'Login',
                email: 'Email',
                password: 'Password',
                remember: 'Remember Me',
                forgot_password: 'Forgot your password?',
            },
        },
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
