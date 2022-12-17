import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import ProductCardView from '@/views/ProductCard/ProductCardView.vue';
import TestView from '@/views/TestView.vue';
import './style.scss';
import 'vue3-carousel/dist/carousel.css';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Main', component: ProductCardView },
    { path: '/test', name: 'Test', component: TestView },
  ],
});

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(vuetify).use(router).mount('#app');
