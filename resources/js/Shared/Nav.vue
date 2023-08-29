<script setup>
    import { Link } from '@inertiajs/vue3'
</script>

<template>
    <nav>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/users">Users</Link>
            </li>
            <li>
                <Link href="/settings">Settings</Link>
                <Link href="/logout" method="post" as="button" class="text-blue-500 hover:underline">Log Out</Link>
            </li>
        </ul>
    </nav>
</template>
