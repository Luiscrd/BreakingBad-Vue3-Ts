import AboutPage from '@/shared/pages/AboutPage.vue';
import HomePage from '@/shared/pages/HomePage.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { characterRoute } from '../charaters/router/index';

const router = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),

    routes: [
        {path: '/', name: 'home', component: HomePage},
        {path: '/about', name: 'about', component: AboutPage},
        {...characterRoute, path: '/characters'},
        // {
        //     path: '/characters',
        //     name: 'characters',
        //     component: () => import('@/charaters/layout/CharaterLayout.vue'),
        // },
        {path: '/:pathMatch(.*)*', redirect: () => ({ name: 'home'})},
    ]
});

// path: '/characters'
// router.addRoute(characterRoute);

export default router;