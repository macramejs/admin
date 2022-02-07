<template>
    <div class="w-full">
        <div
            class="flex items-center px-[18px] justify-center w-full h-40 transition-colors duration-300 border rounded cursor-pointer bg-gray-50 focus:outline-none focus:border-orange"
            :class="{
                'border-red-signal': fileRejections.length > 0 || isDragReject,
                'border-green': isDragAccept,
                '!cursor-not-allowed': disabled,
                'border-gray-200':
                    !isDragReject &&
                    !isDragAccept &&
                    fileRejections.length == 0,
                '!h-[60px] !justify-start': inline,
            }"
            v-bind="getRootProps()"
        >
            <input v-bind="getInputProps()" />
            <div
                class="flex gap-2.5 items-center"
                :class="{ 'flex-col': !inline }"
            >
                <div class="text-orange">
                    <svg
                        width="24"
                        height="24"
                        stroke-width="1.5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M13 21H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6V13"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="m3 16 7-3 5.5 2.5M16 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM16 19h3m3 0h-3m0 0v-3m0 3v3"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </div>
                <span class="text-sm text-center uppercase" v-if="busy"
                    >Loading ...</span
                >
                <span
                    class="text-sm text-center uppercase"
                    v-if="!busy && isDragActive"
                    >Drop the files here ...</span
                >
                <span
                    class="text-sm text-center uppercase"
                    v-if="!busy && !isDragActive"
                >
                    Drag & Drop or browse
                </span>
            </div>
        </div>
    </div>
    <div class="ml-[18px]" v-if="fileRejections.length > 0">
        <span
            v-for="error in fileRejections[0].errors"
            class="inline-block mt-1 text-xs text-red-signal"
        >
            {{ error.message }}
        </span>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue';
import { useDropzone } from 'vue3-dropzone';
import axios from 'axios';

export default defineComponent({
    name: 'FileUpload',
    emits: ['update:modelValue'],
    props: {
        modelValue: Array,
        accept: {
            type: [Array, String],
            default: null,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        inline: {
            type: Boolean,
            default: false,
        },
        maxSize: {
            type: Number,
            default: 10,
        },
        maxFiles: {
            type: Number,
            default: 1,
        },
        url: {
            type: String,
            required: true,
        },
        multiple: {
            type: Boolean,
            default: false,
        },
    },
    setup(props: any, { emit }) {
        const busy = ref(false);

        const saveFiles = files => {
            busy.value = true;
            const formData = new FormData(); // pass data as a form
            for (var x = 0; x < files.length; x++) {
                // append files as array to the form, feel free to change the array name
                formData.append('images[]', files[x]);
            }

            // post the formData to your backend where storage is processed. In the backend, you will need to loop through the array and save each file through the loop.
            axios
                .post(props.url, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then(response => {
                    console.info(response.data);
                    busy.value = false;
                })
                .catch(err => {
                    console.error(err);
                    busy.value = false;
                });
        };

        function onDrop(acceptFiles, rejectReasons) {
            if (rejectReasons.length == 0) {
                saveFiles(acceptFiles);
            }
        }

        const maxSize = computed(() => {
            return props.maxSize * (1024 * 1024);
        });

        const { getRootProps, getInputProps, ...rest } = useDropzone({
            onDrop,
            accept: props.accept,
            disabled: props.disabled,
            maxSize: maxSize.value,
            multiple: props.multiple,
            maxFiles: props.maxFiles,
        });

        return {
            getRootProps,
            getInputProps,
            ...rest,
        };
    },
});
</script>
