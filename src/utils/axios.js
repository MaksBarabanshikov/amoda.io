import axios from 'axios';
import { useAuthStore } from '../store/authStore.js';
import { useMainStore } from '../store/mainStore';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
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

  config.baseURL = `http://45.12.215.174/${locale}/api/`;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default instance;
