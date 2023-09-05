<script setup>
    defineProps({
        time: String,
        users: Array
    });
</script>

<template>
    <Head>
        <title>Users</title>
    </Head>

    <h1 class="text-3xl">Users</h1>

    <div style="margin-top: 900px">
        <p>The current time is {{ time}}.</p>
        <Link href="/users" class="text-blue-500" preserve-scroll>
            Refresh
        </Link>
    </div>
    
    <ul>
        <li
            v-for="user in users"
            :key="user.id"
            v-text="user.name"
        />
    </ul>

</template>
