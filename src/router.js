import { createRouter, createWebHistory } from 'vue-router';

// Components
import CoachList from './pages/coaches/CoachList.vue';
import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachRegister from './pages/coaches/CoachRegister.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequsetsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachList },
        { path: '/coaches/:id', component: CoachDetail, props: true, children: [
            { path: 'contact', component: ContactCoach }
        ] },
        { path: '/register', component: CoachRegister },
        { path: '/requests', component: RequsetsReceived },
        { path: '/:notFound(.*)', component: NotFound }
    ],
});

export default router;