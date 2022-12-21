import axios from 'axios';
import { useAuthStore } from '../store/authStore.js';
import { useMainStore } from '../store/mainStore';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE',
    'Access-Control-Allow-Headers':
      'Origin, X-Requested-With, Content-Type, Accept',
  },
  withCredentials: true,
});

instance.interceptors.request.use(function (config) {
  const mainStore = useMainStore();
  const authStore = useAuthStore();

  const locale = mainStore.locale;
  const token = authStore.token;

  config.baseURL = `http://45.12.215.174/${locale}/api/realty/638eee2cb7d2b1310a0b2981/`;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default instance;
