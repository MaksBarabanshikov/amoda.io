import { createApp } from 'vue';
import App from './App.vue';
import './style.scss';
import 'vue3-carousel/dist/carousel.css';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(vuetify).mount('#app');
