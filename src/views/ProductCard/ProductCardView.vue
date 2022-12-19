<script setup>
  import StickyJohny from '@/views/ProductCard/components/StickyJohny.vue';
  import CardContent from '@/views/ProductCard/components/CardContent.vue';
  import CarouselOffers from '@/views/ProductCard/components/CarouselOffers.vue';
  import IconLocation from '@/icons/iconLocation.vue';
  import { useDisplay } from 'vuetify';

  const { mobile } = useDisplay();
</script>
<template>
  <section class="product-card">
    <div class="product-card__title">
      <h1 class="mb-3">
        Ultra luxurious 4+1 in beyzade residences, the favorite of the city,
        from garanti̇ grup
      </h1>
      <span class="d-flex align-center"
        ><icon-location class="me-2" /> Antalya, Alanya, Avsallar</span
      >
    </div>
    <v-row no-gutters class="relative mt-8">
      <card-content />
      <sticky-johny v-if="!mobile" />
    </v-row>
  </section>
  <carousel-offers />
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
