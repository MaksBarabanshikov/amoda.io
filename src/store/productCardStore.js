import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useProductCardStore = defineStore('productCardStore', () => {
  const productData = ref(null);
  const loading = ref(false);

  const description = computed(() => {
    return productData.value.data.description;
  });

  const initProductCard = (payload) => {
    return (productData.value = payload);
  };

  const toggleLoading = () => (loading.value = !loading.value);

  return {
    productData,
    loading,
    description,
    initProductCard,
    toggleLoading,
  };
});
