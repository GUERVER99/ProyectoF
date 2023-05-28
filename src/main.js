import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import { router } from './helpers';
import axios from 'axios';
import Vueaxios from 'vue-axios';



const app = createApp(App);
app.use(Vueaxios,axios);

app.use(createPinia());
app.use(router);

app.mount('#app');
