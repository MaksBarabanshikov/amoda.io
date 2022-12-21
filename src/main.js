import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import App from './App.vue';
import ProductCardView from '@/views/ProductCard/ProductCardView.vue';
import TestView from '@/views/TestView.vue';
import './style.scss';
import 'vue3-carousel/dist/carousel.css';

import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.min.css';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

const pinia = createPinia();

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Main', component: ProductCardView },
    { path: '/test', name: 'Test', component: TestView },
  ],
});

const vuetify = createVuetify({
  theme: false,
  display: {
    mobileBreakpoint: 'md',
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});

const app = createApp(App);

app.use(vuetify).use(pinia).use(router).mount('#app');
