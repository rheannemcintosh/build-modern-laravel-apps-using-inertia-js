<script setup>
    import Layout from '../Shared/Layout.vue';

    const props = defineProps({
        time: String,
    })
</script>

<template>
    <Layout>
        <h1 class="text-3xl">Users</h1>

        <div style="margin-top: 900px">
            <p>The current time is {{ time}}.</p>
            <Link href="/users" class="text-blue-500" preserve-scroll>
                Refresh
            </Link>
        </div>
    </Layout>
</template>
