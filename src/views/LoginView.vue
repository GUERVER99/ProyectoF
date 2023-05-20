<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
const router = useRouter()

import { useAuthStore } from '@/stores';
import { useRouter } from 'vue-router';

const schema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
});

function onSubmit(values, { setErrors }) {
    const authStore = useAuthStore();
    const { username, password } = values;

    return authStore.login(username, password)
        .catch(error => setErrors({ apiError: error }));
}

const irARegistro = () =>{
    console.log('registro')
    router.push('/registrarse')
}


</script>

<template>
    <div>
        
        <div><h2>BIENVENIDO!</h2></div>
        <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
            <div class="form-group">
                <label>Usuario</label>
                <Field name="username" type="text" class="form-control" :class="{ 'is-invalid': errors.username }" />
                <div class="invalid-feedback">{{errors.username}}</div>
            </div>            
            <div class="form-group">
                <label>Contraseña</label>
                <Field name="password" type="password" class="form-control" :class="{ 'is-invalid': errors.password }" />
                <div class="invalid-feedback">{{errors.password}}</div>
            </div>
                   
            <div class="form-group">
                <button class="btn btn-primary" :disabled="isSubmitting">
                    <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                    Aceptar
                </button>
            </div>
            <div v-if="errors.apiError" class="alert alert-danger mt-3 mb-0">{{errors.apiError}}</div>
            
        </Form>
        
        <div>
            <div>
                <button @click="irARegistro">Registrarse</button>
                </div>
            </div>   
        
    </div>
    
</template>

<style>
@import '@/assets/loginview.css';
</style>