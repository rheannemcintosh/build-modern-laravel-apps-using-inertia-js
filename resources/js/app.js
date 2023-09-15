import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue'
import {createInertiaApp, Link, Head} from '@inertiajs/vue3'
import Layout from "./Shared/Layout.vue";
import {resolvePageComponent} from "laravel-vite-plugin/inertia-helpers";

createInertiaApp({
    resolve: async name => {

        const page = (
            await resolvePageComponent(
                `./Pages/${name}.vue`,
                import.meta.glob('./Pages/**/*.vue')
            )
        );

        if (page.default.layout === undefined) {
            page.default.layout = Layout;
        }

        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component('Link', Link)
            .component('Head', Head)
            .mount(el)
    },
    progress: {
        color: '#FF8400',
        showSpinner: true,
    },

    title: title => `My App | ${title}`
})
