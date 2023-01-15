import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useProductCardStore = defineStore('productCardStore', () => {
  const productData = ref(null);
  const loading = ref(false);

  const photos = computed(() => {
    return productData.value.data.photos;
  });
  const video = computed(() => {
    return productData.value.data.videos;
  });
  const sliderItems = computed(() => {
    return photos.value.concat(video.value);
  });

  const description = computed(() => {
    return productData.value.data.description;
  });

  const properties = computed(() => {
    return productData.value.data.properties;
  });

  const baseProp = computed(() => {
    return Object.entries(properties.value).filter(
      (prop) => prop[1].type === 'Base'
    );
  });

  const information = computed(() => {
    return Object.entries(properties.value).filter(
      (prop) => prop[1].type === 'Information'
    );
  });

  const initProductCard = (payload) => {
    return (productData.value = payload);
  };

  const toggleLoading = () => (loading.value = !loading.value);

  return {
    productData,
    loading,
    sliderItems,
    description,
    baseProp,
    properties,
    information,
    initProductCard,
    toggleLoading,
  };
});
