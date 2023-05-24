<script setup>
import { storeToRefs } from 'pinia';

import { useAuthStore, useUsersStore } from '@/stores';

const authStore = useAuthStore();
const { user: authUser } = storeToRefs(authStore);

const usersStore = useUsersStore();
const { users } = storeToRefs(usersStore);

usersStore.getAll();
</script>

<template>
    <div>
        <h1>BIENVENID@ {{authUser?.firstName}}!</h1>
        <p>Has Iniciado sesion en la APP TU SALUD!!</p>
        <h3>Esta es una version de prueba, creada para presentar en la universidad y salvar el semestre :-(</h3>
        <br>
        <br>
        <h4>Listado de usuarios prueba:</h4>
        <ul v-if="users.length">
            <li v-for="user in users" :key="user.id">{{user.firstName}} {{user.lastName}}</li>
        </ul>
    
    </div>
</template>


<style>
@import '@/assets/homeview.css';
</style>