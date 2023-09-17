<script setup>
    import NavLink from './NavLink.vue';
</script>

<template>
    <nav class="">
        <ul class="flex space-x-6">
            <li>
                <NavLink
                    href="/"
                    :active="$page.component === 'Home'"
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    href="/users"
                    :active="$page.component === 'Users/Index'"
                >
                    Users
                </NavLink>
            </li>
            <li>
                <NavLink
                    href="/threads"
                    :active="$page.component === 'Threads/Index'"
                >
                    Threads
                </NavLink>
            </li>
            <li>
                <NavLink
                    href="/settings"
                    :active="$page.component === 'Settings'"
                >
                    Settings
                </NavLink>
            </li>
            <li>
                <NavLink
                    href="/logout"
                    method="post"
                    as="button"
                    class="text-blue-500 hover:underline"
                >
                    Log Out
                </NavLink>
            </li>
        </ul>
    </nav>
</template>
