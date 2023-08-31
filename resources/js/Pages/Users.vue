<script setup>
    import Nav from '../Shared/Nav.vue';

    const props = defineProps({
        time: String,
    })
</script>

<template>
    <h1 class="text-4xl font-bold">Users</h1>
    <Nav />
</template>
