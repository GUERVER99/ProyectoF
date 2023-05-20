<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
      <h2>Formulario de Registro</h2>
      <form @submit.prevent="registrar">
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
          <input type="password" id="password" v-model="usuario.password" required>
        </div>
        <div>
          <button type="submit">Registrarse</button>
        </div>
      </form>
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
          password: '',
        },
      };
    },
    methods: {
      registrar() {
        // Lógica de registro aquí
        console.log('Registrarse', this.usuario);
      },
    },
  };
  </script>