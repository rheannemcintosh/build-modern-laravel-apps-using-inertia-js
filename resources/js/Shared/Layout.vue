<script setup>
    import Nav from './Nav.vue';
</script>

<template>
    <Head>
        <meta type="description" contents="Information About My App" head-key="description">
    </Head>
    <section class="p-6 bg-gray-200">
        <header class="flex justify-between">
            <div class="flex items-center">
                <h1 class="font-bold text-lg">My App</h1>

                <p class="text-sm ml-4">
                    Welcome Back, {{ $page.props.auth.user.username }}!
                </p>
            </div>

            <Nav />
        </header>
    </section>
    <div class="bg-blue-950 text-white p-2 flex items-center justify-center">
        <p class="text-sm"><span class="font-bold pr-2">Latest Thread:</span> <Link href="#" v-text="$page.props.latestThread.title" /></p>
    </div>

    <section class="p-6">
        <div class="max-w-3xl mx-auto">
            <slot />
        </div>
    </section>
</template>
