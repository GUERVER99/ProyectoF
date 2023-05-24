<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
      <h2>Formulario de Registro</h2>
        <div>
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" v-model="usuario.nombre" required>
        </div>
        <div>
          <label for="apellido">Apellido:</label>
          <input type="text" id="apellido" v-model="usuario.apellido" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="usuario.email" required>
        </div>
        <div>
          <label for="password">Contraseña:</label>
          <input type="clave" id="clave" v-model="usuario.password" required>
        </div>
        <div>
          <label for="tipo_usuario">Tipo de usuario:</label>
          <input type="tipo_usuario" id="tipo_usuario" v-model="usuario.tipo_usuario" required>
        </div>
        <div>
          <button @click="registrar">Registrarse</button>
          
        </div>
        <div>
          <button @click="irALogin">Inicio</button>
        </div>

    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        usuario: {
          nombre: '',
          apellido: '',
          email: '',
          clave: '',
          tipo_usuario:''
        },
      };
    },
    methods: {
      registrar() {
        // Lógica de registro aquí
        console.log('Registrarse', this.usuario);
      },

      irALogin() {
        // volver al login
        
        console.log()
        this.$router.push('/')
      },
    },



  };

  </script>

  <style>
@import '@/assets/homeview.css';
</style>