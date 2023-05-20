import {createRouter, createWebHistory} from "vue-router"
import Mundo from "../Pages/Mundo.vue"
import Herancas from "../Pages/Herancas.vue"

const routes = [
    {path: "/", name: "Mundo", component: Mundo},
    {path: "/mecanicas", name: "Mecânicas", component: Mundo},
    {path: "/herancas", name: "Heranças", component: Herancas},
    {path: "/bencaos", name: "Bençãos", component: Mundo},
    {path: "/cartas", name: "Cartas", component: Mundo}
]

const router = createRouter({
    routes,
    history: createWebHistory('crown-of-blood'),
})

export default router