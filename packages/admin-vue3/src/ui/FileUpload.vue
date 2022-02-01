<template>
    <div class="w-full">
        <div
            class="flex items-center justify-center w-full h-40 transition-colors duration-300 bg-white border rounded-md hover:bg-gray-100"
            :class="{
                'border-red-signal': fileRejections.length > 0 || isDragReject,
                'border-green': isDragAccept,
                'border-gray-200':
                    !isDragReject &&
                    !isDragAccept &&
                    fileRejections.length == 0,
            }"
            v-bind="getRootProps()"
        >
            <input v-bind="getInputProps()" />
            <p v-if="isDragActive">Drop the files here ...</p>
            <p v-else>
                Drag 'n' drop some files here, or click to select files
            </p>
        </div>
    </div>
    <div class="mt-2" v-if="fileRejections.length > 0">
        <span
            v-for="error in fileRejections[0].errors"
            class="inline-block text-red-signal"
        >
            {{ error.message }}
        </span>
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import { useDropzone } from 'vue3-dropzone';

export default defineComponent({
    name: 'FileUpload',
    emits: ['update:modelValue'],
    props: {
        modelValue: Array,
        accept: {
            type: Array as PropType<String[]>,
            default: null,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        maxSize: {
            type: Number,
            default: 10000000,
        },
        maxFiles: {
            type: Number,
            default: 2,
        },
    },
    setup(props: any, { emit }) {
        function onDrop(acceptFiles, rejectReasons) {
            console.log(acceptFiles);
            console.log(rejectReasons);
            let accepted = [];
            acceptFiles.forEach(element => {
                accepted.push({
                    path: element.path,
                    size: element.size,
                    name: element.name,
                });
            });
            emit('update:modelValue', accepted);
        }

        const { getRootProps, getInputProps, ...rest } = useDropzone({
            onDrop,
            accept: props.accept,
            maxSize: props.maxSize,
            multiple: true,
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
