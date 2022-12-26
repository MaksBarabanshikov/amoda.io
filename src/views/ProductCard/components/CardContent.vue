<script setup>
  import mapImage from '@/assets/img/image/map.png';
  import MyCarousel from '@/components/MyCarousel/MyCarousel.vue';
  import TextBlock from '@/views/ProductCard/components/TextBlock.vue';
  import MyTabs from '@/components/MyTabs/MyTabs.vue';
  import { storeToRefs } from 'pinia';
  import { useProductCardStore } from '@/store/productCardStore.js';

  const store = useProductCardStore();

  const { productData } = storeToRefs(store);
</script>
<template>
  <v-col class="product-card__content" md="12" lg="9">
    <my-carousel
      :colors="colors"
      :slides="productData.data.photos"
      control-image
    />
    <text-block />
    <my-tabs :tab-data="productData.data.features" />
    <div class="product-card__map mb-0">
      <v-img :src="mapImage" />
    </div>
  </v-col>
</template>

<style lang="scss">
  .product-card__content {
    & > * {
      margin-bottom: 20px;
    }
  }
  .product-card__block {
    background-color: #fff;
    border-radius: 10px;
    padding: 40px;

    @media (max-width: 1000px) {
      padding: 30px;
    }

    @media (max-width: 700px) {
      padding: 20px 15px !important;
    }

    &-title {
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      margin-bottom: 10px;

      @media (max-width: 1000px) {
        font-size: 20px;
        line-height: 24px;
      }
    }

    &-text {
      font-weight: 400;
      font-size: 15px;
      line-height: 200%;

      @media (max-width: 1000px) {
        font-size: 12px;
        line-height: 165%;
      }
    }
  }
  .product-card__info {
    .v-list-item {
      padding: 0 !important;
    }
  }
  .v-slide-group__prev,
  .v-slide-group__next {
    display: none !important;
  }
  .v-tab {
    text-transform: none !important;
    line-height: 17px !important;
    &:hover {
      background-color: #eaeaea;
    }

    &--selected {
      background: linear-gradient(210.64deg, #2485fd 6.88%, #1859fe 91.15%),
        #2653f2 !important;
      color: #fff !important;
    }
  }

  .v-card-text {
    padding: 40px !important;
  }

  .grid {
    .v-list-item {
      padding: 0 !important;
    }
    .v-list-item-title {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 200%;
    }
  }
</style>
