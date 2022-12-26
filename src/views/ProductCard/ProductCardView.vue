<script setup>
  import StickyJohny from '@/views/ProductCard/components/StickyJohny.vue';
  import CardContent from '@/views/ProductCard/components/CardContent.vue';
  import CarouselOffers from '@/views/ProductCard/components/CarouselOffers.vue';
  import IconLocation from '@/icons/iconLocation.vue';
  import { useDisplay } from 'vuetify';
  import { getCurrentRealty } from '@/services/realty.service.js';
  import { useProductCardStore } from '@/store/productCardStore.js';
  import { watch } from 'vue';
  import LinearLoader from '@/components/loaders/LinearLoader.vue';
  import { storeToRefs } from 'pinia';

  const { data, isLoading, isFinished } = getCurrentRealty();

  const { mobile } = useDisplay();

  const store = useProductCardStore();

  const { initProductCard } = store;

  const { productData } = storeToRefs(store);

  watch(
    () => isFinished.value,
    () => {
      if (isFinished.value) {
        initProductCard(data.value);
      }
    }
  );
</script>
<template>
  <LinearLoader :is-loading="isLoading" />
  <template v-if="isFinished">
    <section class="product-card">
      <div class="product-card__title">
        <h1 class="mb-3">
          {{ productData.data.title }}
        </h1>
        <span class="d-flex align-center"
          ><icon-location class="me-2" />
          {{ productData.data.location.address }}</span
        >
      </div>
      <v-row no-gutters class="relative mt-8">
        <card-content />
        <sticky-johny v-if="!mobile" />
      </v-row>
    </section>
    <v-lazy>
      <carousel-offers />
    </v-lazy>
  </template>
</template>
<style lang="scss">
  .product-card {
    &__title {
      h1 {
        font-size: 28px;
        font-weight: 500;

        @media (max-width: 1000px) {
          font-size: 22px;
          line-height: 130%;
        }
      }

      span {
        @media (max-width: 1000px) {
          font-weight: 400;
          font-size: 12px;
          line-height: 160%;
        }
      }
    }
  }
</style>
