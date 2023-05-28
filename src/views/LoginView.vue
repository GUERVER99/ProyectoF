<script setup>
import {  Field } from 'vee-validate';
import axios from 'axios';
const router = useRouter()
import { useRouter } from 'vue-router';
import { reactive } from 'vue';


const irARegistro = () =>{
    console.log('registro')
    router.push('/registrarse')
}

const datos = reactive({
    email: '',
    clave: ''
})

function irAlogin2() {
  axios.post('http://localhost:3001/login', datos)
    .then((response) => {
      // Verificar la información recibida en la respuesta
      if (response.data && response.data.emailVerified) {
        // El correo electrónico ha sido verificado correctamente, redirigir al usuario al inicio de la aplicación
        window.location.href = '/inicio';
      } else {
        // El correo electrónico no ha sido verificado, mostrar un mensaje de error al usuario
        mostrarMensajeError('El correo electrónico no ha sido verificado');
      }
    })
    .catch((error) => {
      console.log(error.response);
    });
}

function mostrarMensajeError(mensaje) {
  // Puedes utilizar una librería o implementar tu propia lógica para mostrar mensajes de error en la interfaz de usuario
  // Aquí se muestra un ejemplo simple utilizando el método alert
  alert(mensaje);
}





</script>

<template>
    <div class="titulo-1">
            <h2>BIENVENIDO</h2>
            <h3>A la APP TU SALUD</h3>
        </div>
    
        <div class="contenedor">
        
            <div class="form-group">
                <label>Usuario</label>
                <Field name="email" type="text" class="form-control" v-model="datos.email" />
               
            </div>            
            <div class="form-group">
                <label>Contraseña</label>
                <Field name="clave" type="password" class="form-control"  v-model="datos.clave"/>
            
            </div>
                   
            <div class="aceptar">
                <button class="btn btn-primary" @click="irAlogin2">
                    
                    Aceptar
                </button>
            </div>
            
        
    
        <div class="registro">
            <div>
                <button @click="irARegistro">Registrarse</button>
                </div>
            </div>   
        
    </div>
    
</template>

<style>
@import '@/assets/loginview.css';
</style>