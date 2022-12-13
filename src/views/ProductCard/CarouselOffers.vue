<script setup>
  import IconArrow from '@/icons/IconArrow.vue';
  import CarouselCard from '@/views/ProductCard/CarouselCard.vue';
</script>
<template>
  <div class="product-card__block product-card__test py-10 mt-5">
    <h2 class="product-card__block-title px-12 mb-7">Nearliness</h2>
    <v-carousel class="carousel-cards" cycle height="500" hide-delimiters>
      <template v-slot:prev="{ props }">
        <v-btn variant="flat" icon @click="props.onClick" size="40">
          <IconArrow type="prev" />
        </v-btn>
      </template>
      <template v-slot:next="{ props }">
        <v-btn variant="flat" icon @click="props.onClick" size="40">
          <IconArrow type="next" />
        </v-btn>
      </template>
      <div class="px-12">
        <div class="overflow-hidden relative">
          <v-carousel-item>
            <div class="grid grid-cols-4 gap-x-5">
              <carousel-card />
              <carousel-card />
              <carousel-card />
              <carousel-card />
            </div>
          </v-carousel-item>
          <v-carousel-item>
            <div class="grid grid-cols-4 gap-x-5">
              <carousel-card />
              <carousel-card />
              <carousel-card />
              <carousel-card />
            </div>
          </v-carousel-item>
          <v-carousel-item>
            <div class="grid grid-cols-4 gap-x-5">
              <carousel-card />
              <carousel-card />
              <carousel-card />
              <carousel-card />
            </div>
          </v-carousel-item>
          <v-carousel-item>
            <div class="grid grid-cols-4 gap-x-5">
              <carousel-card />
              <carousel-card />
              <carousel-card />
              <carousel-card />
            </div>
          </v-carousel-item>
        </div>
      </div>
    </v-carousel>
  </div>
</template>
<style lang="scss">
  .carousel-cards .v-window__controls {
    padding: 0 5px 0 5px !important;
  }
</style>
