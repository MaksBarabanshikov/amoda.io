import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMainStore = defineStore('mainStore', () => {
  const locale = ref('ru');

  const changeLocale = (payload) => (locale.value = payload);

  return { locale, changeLocale };
});
