<script setup>
</script>

<template>
    <Head>
        <title>Users - Create</title>
    </Head>

    <div class="flex justify-between mb-6">
        <h1 class="text-3xl">Create New User</h1>
    </div>

    <form method="POST" action="/" class="max-w-md mx-auto mt-8">
        <div class="mb-6">
            <label
                class="block mb-2 uppercase font-bold text-xs text-gray-700"
                for="name"
            >
                Name
            </label>

            <input
                class="border border-gray-400 p-2 w-full"
                type="text"
                name="name"
                id="name"
                required
            >
        </div>
        <div class="mb-6">
            <label
                class="block mb-2 uppercase font-bold text-xs text-gray-700"
                for="email"
            >
                Email
            </label>

            <input
                class="border border-gray-400 p-2 w-full"
                type="email"
                name="email"
                id="email"
                required
            >
        </div>
        <div class="mb-6">
            <label
                class="block mb-2 uppercase font-bold text-xs text-gray-700"
                for="password"
            >
                Password
            </label>

            <input
                class="border border-gray-400 p-2 w-full"
                type="password"
                name="password"
                id="password"
                required
            >
        </div>

        <div class="mb-6">
            <button
                type="submit"
                class="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500"
            >
                Submit
            </button>
        </div>
    </form>
</template>
