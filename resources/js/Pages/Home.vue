<script>
import {highlight} from "@/Services/SyntaxHighlighing.js";

export default {
    mounted() {
        highlight();
    }
};

</script>

<template>
    <Head>
        <title>Home</title>
        <meta type="description" contents="Home Information" head-key="description">
    </Head>

    <h1 class="text-3xl">Home</h1>

    <pre>
        <code>
            class Example
            {
                public function __construct()
                {
                    //
                }
            }
        </code>
    </pre>

    <br>

    <pre>
        <code>
            class ExampleTwo
            {
                public function __construct()
                {
                    //
                }
            }
        </code>
    </pre>
</template>
