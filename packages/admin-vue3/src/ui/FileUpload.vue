<template>
    <div class="w-full">
        <div
            class="flex items-center justify-center w-full h-40 transition-colors duration-300 bg-white border rounded focus:outline-none focus:border-orange hover:bg-gray-100"
            :class="{
                'border-red-signal': fileRejections.length > 0 || isDragReject,
                'border-green': isDragAccept,
                'border-gray-500':
                    !isDragReject &&
                    !isDragAccept &&
                    fileRejections.length == 0,
            }"
            v-bind="getRootProps()"
        >
            <input v-bind="getInputProps()" />
            <span class="px-5 text-sm text-center" v-if="busy"
                >Loading ...</span
            >
            <span class="px-5 text-sm text-center" v-if="!busy && isDragActive"
                >Drop the files here ...</span
            >
            <span
                class="px-5 text-sm text-center"
                v-if="!busy && !isDragActive"
            >
                Drag 'n' drop some files here, or click to select files
            </span>
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
        maxSize: {
            type: Number,
            default: 10,
        },
        maxFiles: {
            type: Number,
            default: 1,
        },
        multiple: {
            type: Boolean,
            default: false,
        },
    },
    setup(props: any, { emit }) {
        // const accepted = ref([]);
        const busy = ref(false);

        const saveFiles = files => {
            busy.value = true;
            const formData = new FormData(); // pass data as a form
            for (var x = 0; x < files.length; x++) {
                // append files as array to the form, feel free to change the array name
                formData.append('images[]', files[x]);
            }

            // post the formData to your backend where storage is processed. In the backend, you will need to loop through the array and save each file through the loop.
            // TODO: add right api routefor files
            axios
                .post('/admin/files', formData, {
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
            console.log(acceptFiles);
            console.log(rejectReasons);
            saveFiles(acceptFiles);
            // if (
            //     rejectReasons.length == 0 &&
            //     accepted.value.length < props.maxFiles
            // ) {
            //     acceptFiles.forEach(element => {
            //         accepted.value.push({
            //             path: element.path,
            //             size: element.size,
            //             name: element.name,
            //         });
            //     });
            // }
            // emit('update:modelValue', accepted.value);
        }

        const maxSize = computed(() => {
            return props.maxSize * (1024 * 1024);
        });

        const { getRootProps, getInputProps, ...rest } = useDropzone({
            onDrop,
            accept: props.accept,
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
