<template>
    <Head>
        <title>Home</title>
        <meta type="description" contents="Home Information" head-key="description">
    </Head>

    <h1 class="text-3xl">Home</h1>

    <Highlight :code="snippet" />
</template>

<script setup>
    import Highlight from "@/Components/Highlight.vue";

    let snippet = `
    class Example
    {
        public function __construct()
        {
            //
        }
    }
    `.trim();

</script>
