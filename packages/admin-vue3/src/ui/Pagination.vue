<template>
    <div class="flex justify-around">
        <div class="flex space-x-2 items-stretch">
            <Button
                outline
                gray
                square
                class="relative"
                @click="table.setPage(1)"
            >
                <svg
                    class="fill-current absolute left-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                        d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"
                    />
                </svg>
                <svg
                    class="fill-current absolute right-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                        d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"
                    />
                </svg>
            </Button>
            <Button
                outline
                gray
                square
                :disabled="table.currentPage == 1"
                @click="table.setPage(table.currentPage - 1)"
            >
                <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                        d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"
                    />
                </svg>
            </Button>
            <div class="text-gray items-center flex space-x-6 px-4">
                <span class="text-lg" v-if="table.currentPage > 2"> ... </span>
                <span
                    class="text-lg cursor-pointer"
                    v-if="
                        table.currentPage == table.getLastPage() &&
                        table.currentPage > 2
                    "
                    @click="table.setPage(table.currentPage - 2)"
                >
                    {{ table.currentPage - 2 }}
                </span>
                <span
                    class="text-lg cursor-pointer"
                    v-if="table.currentPage > 1"
                    @click="table.setPage(table.currentPage - 1)"
                >
                    {{ table.currentPage - 1 }}
                </span>
                <span class="text-blue font-bold text-lg">
                    {{ table.currentPage }}
                </span>
                <span
                    class="text-lg cursor-pointer"
                    v-if="table.currentPage < table.getLastPage()"
                    @click="table.setPage(table.currentPage + 1)"
                >
                    {{ table.currentPage + 1 }}
                </span>
                <span
                    class="text-lg cursor-pointer"
                    v-if="table.currentPage == 1 && table.getLastPage() > 2"
                    @click="table.setPage(table.currentPage + 2)"
                >
                    {{ table.currentPage + 2 }}
                </span>
                <span
                    class="text-lg cursor-pointer"
                    v-if="table.currentPage < table.getLastPage() - 1"
                >
                    ...
                </span>
            </div>
            <Button
                outline
                gray
                square
                :disabled="table.currentPage == table.getLastPage()"
                @click="table.setPage(table.currentPage + 1)"
            >
                <svg
                    class="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                        d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                    />
                </svg>
            </Button>
            <Button
                outline
                gray
                square
                class="relative"
                @click="table.lastPage()"
            >
                <svg
                    class="fill-current absolute right-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                        d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                    />
                </svg>
                <svg
                    class="fill-current absolute left-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                        d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
                    />
                </svg>
            </Button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Index } from '@macramejs/macrame-vue3';
import Button from './Button.vue';

export default defineComponent({
    components: { Button },
    props: {
        table: {
            type: Object as PropType<Index>,
            required: true,
        },
    },
});
</script>
