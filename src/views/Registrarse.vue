<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    
      <!-- Campos del formulario -->

      <h2>Formulario de Registro</h2>
      <div>
        <label :class="{ 'error-label': usuario.nombre === '' }" for="nombre">Nombre:</label>
        <input type="text" id="nombre" v-model="usuario.nombre" required>
      </div>
      <div>
        <label :class="{ 'error-label': usuario.apellido === '' }" for="apellido">Apellido:</label>
        <input type="text" id="apellido" v-model="usuario.apellido" required>
      </div>
      <div>
        <label :class="{ 'error-label': usuario.email === '' }" for="email">Email:</label>
        <input type="email" id="email" v-model="usuario.email" required>
      </div>
      <div>
        <label :class="{ 'error-label': usuario.clave === '' }" for="clave">Contraseña:</label>
        <input type="password" id="clave" v-model="usuario.password" required>
      </div>
      <div>
        <label :class="{ 'error-label': usuario.nombre === '' }" for="tipo_user">Tipo de usuario:</label>
        <input type="text" id="tipo_user" v-model="usuario.tipo_user" required>
      </div>
      <div>
        <button @click="postUserAgregar">Registrarse</button>
      </div>
    
    <div>
      <button @click="irALogin">Inicio</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      usuario: {
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        tipo_user: ''
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

    getInfo() {
      axios.get('http://localhost:3001/usuarios')
        .then((res) => {
          console.log(res.data)
        })
        .catch((e) => e)
    },

    postUserAgregar() {
      if (
    this.usuario.nombre !== '' &&
    this.usuario.apellido !== ''&&
    this.usuario.email !== ''&&
    this.usuario.password !== ''&&
    this.usuario.tipo_user !==''
      ){
      const userData = {
        nombre: this.usuario.nombre,
        apellido: this.usuario.apellido,
        email: this.usuario.email,
        password: this.usuario.password,
        tipo_user: this.usuario.tipo_user
      };

      axios.post('http://localhost:3001/usuarios_agregar', userData)
        .then((res) => {
          this.$router.push('/');
          console.log(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }else{
      console.log();
      alert('todos los campos son obligatorios');
    }
  },
},

  mounted() {
    this.getInfo();
  }
}
</script>

<style>
@import '@/assets/homeview.css';
</style>