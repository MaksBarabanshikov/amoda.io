<script setup>
  import StickyJohny from '@/views/ProductCard/components/StickyJohny.vue';
  import CardContent from '@/views/ProductCard/components/CardContent.vue';
  import CarouselOffers from '@/views/ProductCard/components/CarouselOffers.vue';
  import IconLocation from '@/icons/iconLocation.vue';
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
    <v-row class="relative mt-8">
      <card-content />
      <sticky-johny />
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
      }
    }
  }
</style>
