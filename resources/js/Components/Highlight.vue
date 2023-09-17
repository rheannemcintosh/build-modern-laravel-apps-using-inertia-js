<template>
    <div>
        <header class="bg-gray-800 text-white flex justify-end px-2 py-1 text-xs border-b border-gray-700">
            <button class="hover:bg-gray-600 rounded px-2">Copy</button>
        </header>
        <pre>
            <code ref="block">
                {{ code }}
            </code>
        </pre>

    </div>
</template>

<script setup>
    import { highlightElement } from '@/Services/SyntaxHighlighing.js';
    import { onMounted, ref } from 'vue';

    defineProps({
        code: String,
    });

    let block = ref(null);

    onMounted(() => {
        highlightElement(block.value);
    });
</script>
