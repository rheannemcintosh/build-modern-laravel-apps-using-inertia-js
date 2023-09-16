import hljs from "highlight.js/lib/common";

import php from "highlight.js/lib/languages/php.js";
import javascript from "highlight.js/lib/languages/javascript.js";

import "highlight.js/styles/github-dark.css";

hljs.registerLanguage("php", php);
hljs.registerLanguage("javascript", javascript);

export function highlightAll() {
    hljs.highlightAll();
}

export function highlight(selector) {
    document.querySelectorAll(selector + ' pre code').forEach(element => {
        hljs.highlightElement(element);
    });
}
