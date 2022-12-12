<script setup>
  import StickyJohny from '@/views/ProductCard/StickyJohny.vue';
  import CardContent from '@/views/ProductCard/CardContent.vue';
</script>
<template>
  <section class="product-card">
    <div class="product-card__title">
      <h1 class="mb-2">
        Ultra luxurious 4+1 in beyzade residences, the favorite of the city,
        from garanti̇ grup
      </h1>
      <span>Antalya, Alanya, Avsallar</span>
    </div>
    <v-row class="relative">
      <v-col cols="9">
        <card-content />
      </v-col>
      <sticky-johny />
    </v-row>
  </section>
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
