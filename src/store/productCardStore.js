import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProductCardStore = defineStore('productCardStore', () => {
  const productData = ref(null);
  const loading = ref(false);

  const initProductCard = (payload) => {
    return (productData.value = payload);
  };

  const toggleLoading = () => (loading.value = !loading.value);

  return {
    productData,
    loading,
    initProductCard,
    toggleLoading,
  };
});
