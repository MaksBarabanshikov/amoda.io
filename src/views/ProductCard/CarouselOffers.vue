<script setup>
  import { Carousel, Slide, Navigation } from 'vue3-carousel';
  import IconArrow from '@/icons/IconArrow.vue';
  import CarouselCard from '@/views/ProductCard/CarouselCard.vue';

  const settings = {
    itemsToShow: 4,
    mouseDrag: false,
    itemsToScroll: 1,
  };

  const slides = ['первый', 'второй', 'третий', 'четвертый', 'пятый', 'шестой'];
</script>
<template>
  <div class="product-card__block product-card__test py-10 mt-5">
    <div class="px-12">
      <h2 class="product-card__block-title mb-7">Nearliness</h2>
      <carousel :settings="settings" class="carousel-cards">
        <slide v-for="index in slides" :key="index">
          <carousel-card />
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
  </div>
</template>
<style lang="scss">
  .carousel-cards {
    .carousel__slide {
      padding: 0 10px 0 10px;
    }

    .carousel__viewport {
      padding: 10px 0 10px 0;
    }
    .v-btn {
      & > * {
        transition: opacity 0.15s ease-in-out;
      }
      &:hover {
        .arrow {
          background: #5f5f5f;
        }
      }
    }

    .v-card {
      box-shadow: none !important;
      border-radius: 10px;
      @apply cursor-pointer;
      &:hover {
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1),
          0 2px 4px -2px rgb(0 0 0 / 0.1) !important;
      }
    }

    .carousel__prev {
      left: -47px;
    }

    .carousel__next {
      right: -47px;
    }

    .carousel-card__content {
      background-color: #fafafa;
    }
  }
</style>
