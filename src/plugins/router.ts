import { createRouter, createWebHistory } from "vue-router"
import Mundo from "../Pages/Mundo.vue"
import Mecanicas from "../Pages/Mecanicas.vue"
import Herancas from "../Pages/Herancas.vue"
import Bencaos from "../Pages/Bencaos.vue"
import Cartas from "../Pages/Cartas.vue"
// Child
import Amaterasu from '../components/Amaterasu.vue';
import Tsukuyomi from '../components/Tsukuyomi.vue';
import Susanoo from '../components/Susanoo.vue';

const routes = [
    { path: "/", name: "Mundo", component: Mundo },
    { path: "/mecanicas", name: "Mecânicas", component: Mecanicas },
    { path: "/herancas", name: "Heranças", component: Herancas, children: [
        { path: "amaterasu", name: "Amaterasu", component: Amaterasu }, 
        { path: "tsukuyomi", name: "Tsukuyomi", component: Tsukuyomi },
        { path: "susanoo", name: "Susanoo", component: Susanoo },
    ] },
    { path: "/bencaos", name: "Bençãos", component: Bencaos },
    { path: "/cartas", name: "Cartas", component: Cartas }
]

const router = createRouter({
    routes,
    history: createWebHistory('crown-of-blood'),
})

export default router