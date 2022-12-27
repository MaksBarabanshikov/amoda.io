<script setup>
  import { Carousel, Slide, Navigation } from 'vue3-carousel';
  import IconArrow from '@/icons/IconArrow.vue';
  import plug from '@/assets/img/image/slider-example.jpg';

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
</script>

<template>
  <div class="carousel-pagination product-card__block px-10 py-3">
    <carousel :settings="settings" :breakpoints="breakpoints">
      <slide
        v-for="(slide, index) in slides"
        @click="$emit('changeSlide', index)"
        :key="slide"
      >
        <v-img :lazy-src="plug" class="rounded-10" :src="slide.src" />
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
      height: 110px;
      padding: 0 5px 0 5px;
      border-radius: 10px;
      overflow: hidden;
      cursor: pointer;

      img {
        width: 100% !important;
        height: 100% !important;
      }
    }

    .carousel__prev {
      left: -47px !important;
    }

    .carousel__next {
      right: -47px !important;
    }
  }
</style>
