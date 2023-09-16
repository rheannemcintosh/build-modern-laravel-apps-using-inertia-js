<script>
import hljs from "highlight.js/lib/common";
import php from "highlight.js/lib/languages/php.js";
import javascript from "highlight.js/lib/languages/javascript.js";
import "highlight.js/styles/github-dark.css";

hljs.registerLanguage("php", php);
hljs.registerLanguage("javascript", javascript);

export default {
    mounted() {
        hljs.highlightAll();
    }
}

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
