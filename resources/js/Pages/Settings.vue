<script setup>
    defineProps({
        time: String,
    });
</script>

<template>
    <Head>
        <title>Settings</title>
    </Head>

    <h1 class="text-3xl">Settings</h1>

    <div style="margin-top: 1500px">
        <p>The current time is {{ time}}.</p>
        <Link href="/settings" class="text-blue-500" preserve-scroll>
            Refresh
        </Link>
    </div>
</template>

