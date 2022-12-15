<script setup>
  import IconArrow from '@/icons/IconArrow.vue';
  import slideExample from '@/assets/img/image/slider-example.jpg';

  defineProps({
    slides: Array,
    colors: Array,
  });
</script>

<template>
  <v-carousel
    class="product-card__carousel"
    cycle
    height="500"
    hide-delimiter-background
    show-arrows="hover"
  >
    <template v-slot:prev="{ props }">
      <v-btn
        class="white-arrow"
        variant="elevated"
        icon
        @click="props.onClick"
        size="65"
      >
        <IconArrow type="prev" />
      </v-btn>
    </template>
    <template v-slot:next="{ props }">
      <v-btn
        class="white-arrow"
        variant="flat"
        icon
        @click="props.onClick"
        size="65"
      >
        <IconArrow type="next" />
      </v-btn>
    </template>
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet height="100%">
        <v-img :src="slideExample" />
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<style lang="scss">
  .product-card__carousel {
    .v-btn {
      background: rgba(255, 255, 255, 0.3) !important;
    }

    .v-carousel__controls {
      .v-btn {
        width: 5px;
        height: 5px;
        margin-right: 15px;
        transition: all 0.15s ease-in-out;
        background: #ffffff !important;
        overflow: hidden;

        &.v-btn--active {
          width: 8px;
          height: 4px;
          border-radius: 30px;
          background-color: #1f74fd !important;
        }
      }
    }
  }
</style>
