import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('authStore', () => {
  const token = ref(
    '639036e6b7d2b1310a0b299f|u7sJIOsDEUgqyzu55yN2AvKvgSP4WwDrIX5tZp3t'
  );

  const changeToken = (payload) => (token.value = payload);

  return { token, changeToken };
});
