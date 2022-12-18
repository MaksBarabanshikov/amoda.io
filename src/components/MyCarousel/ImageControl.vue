<script setup>
  import { Carousel, Slide, Navigation } from 'vue3-carousel';
  import slideExample from '@/assets/img/image/slider-example.jpg';
  import IconArrow from '@/icons/IconArrow.vue';

  defineEmits(['changeSlide']);

  defineProps({
    slides: Array,
  });

  const settings = {
    itemsToShow: 5,
    transition: 500,
    snapAlign: 'start',
    mouseDrag: false,
  };

  const breakpoints = {
    925: {
      itemsToShow: 5,
    },
    786: {
      itemsToShow: 4,
    },
    300: {
      itemsToShow: 3,
    },
  };

  console.log(breakpoints);
</script>

<template>
  <div class="carousel-pagination product-card__block px-10 py-3">
    <carousel
      :settings="settings"
      :breakpoints="breakpoints"
      class="product-card__carousel"
    >
      <slide
        v-for="(slide, index) in slides"
        @click="$emit('changeSlide', index)"
        :key="slide"
      >
        <div class="carousel__slide">
          <v-img :src="slideExample" />
        </div>
      </slide>
      <template #addons>
        <navigation>
          <template #prev>
            <v-btn class="blue-arrow" variant="flat" icon size="40">
              <IconArrow type="prev" />
            </v-btn>
          </template>
          <template #next>
            <v-btn class="blue-arrow" variant="flat" icon size="40">
              <IconArrow type="next" />
            </v-btn>
          </template>
        </navigation>
      </template>
    </carousel>
  </div>
</template>

<style lang="scss">
  .carousel-pagination {
    .carousel__slide {
      width: 100%;
      height: 100%;
      padding: 0 5px 0 5px;
      border-radius: 10px;
      overflow: hidden;
      cursor: pointer;
    }

    .carousel__prev {
      left: -47px;
    }

    .carousel__next {
      right: -47px;
    }

    .v-img {
      user-select: none;
    }
  }
</style>
