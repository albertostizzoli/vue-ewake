import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';  
import WhoWeAre from './pages/WhoWeAre.vue';

// Definizione delle rotte
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/whoweare',
        name: 'whoweare',
        component: WhoWeAre
    },
];

// Creazione del router con la cronologia del web
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Esportazione del router per l'uso nell'applicazione Vue
export { router };