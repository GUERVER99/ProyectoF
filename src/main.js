import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import { router } from './helpers';
import axios from 'axios';
import Vueaxios from 'vue-axios';



// configurar backend falso
import { fakeBackend } from './helpers';
fakeBackend();

const app = createApp(App);
app.use(Vueaxios,axios);

app.use(createPinia());
app.use(router);

app.mount('#app');
