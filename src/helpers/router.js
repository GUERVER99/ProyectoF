import { createRouter, createWebHistory } from 'vue-router';

import { useAuthStore } from '@/stores';
import { LoginView } from '@/views';
import { HomeView} from '@/views';
import usuarios from '../views/usuarios.vue'
import listado_eps from '../views/listado_eps.vue'
import contactenos from '../views/contactenos.vue'
import Registrarse from '../views/Registrarse.vue'


export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes: [
        { path: '/', component: HomeView },
        { path: '/login', component: LoginView },
        {path:'/registrarse', name: 'registrarse', component: Registrarse },
        { path: '/usuarios', name: 'usuarios', component: usuarios },
        { path: '/listado_eps', name: 'eps', component: listado_eps},
        { path: '/contactenos', name: 'contacto', component: contactenos}
    ]
});


