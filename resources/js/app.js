import './bootstrap';

import { createApp, h } from 'vue'
import {createInertiaApp, Link} from '@inertiajs/vue3'
import Layout from "./Shared/Layout.vue";

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        let page = pages[`./Pages/${name}.vue`]

        page.default.layout ??= Layout;

        return pages[`./Pages/${name}.vue`]
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component('Link', Link)
            .mount(el)
    },
    progress: {
        color: '#FF8400',
        showSpinner: true,
    },

    title: title => `My App | ${title}`
})
