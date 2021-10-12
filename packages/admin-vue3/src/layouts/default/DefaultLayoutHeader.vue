<template>
    <header>
        <div class="flex items-center pt-2 pb-20 justify-between">
            <slot name="logo">
                <Logo />
            </slot>
            <div class="flex items-center gap-4">
                <slot>
                    <DefaultLayoutBurger />
                </slot>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from './../../svg/Logo.vue';
import DefaultLayoutBurger from './DefaultLayoutBurger.vue';

export default defineComponent({
    components: { DefaultLayoutBurger, Logo },
    setup() {
        //
    },
});
</script>
