<script setup>
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
  import slideExample from '@/assets/img/image/slider-example.jpg';
  import IconArrow from '@/icons/IconArrow.vue';
  import ImageControl from '@/components/MyCarousel/ImageControl.vue';
  import { ref } from 'vue';

  defineProps({
    slides: Array,
    colors: Array,
    controlImage: Boolean,
  });

  const mainCarousel = ref(null);

  const handleChangeSlide = (slide) => {
    console.log(slide);
    return mainCarousel.value.slideTo(slide);
  };
</script>

<template>
  <carousel ref="mainCarousel" class="product-card__carousel">
    <slide v-for="slide in slides" :key="slide">
      <v-img :src="slideExample" />
    </slide>
    <template #addons>
      <navigation>
        <template #prev>
          <v-btn class="white-arrow" variant="elevated" icon size="65">
            <IconArrow type="prev" />
          </v-btn>
        </template>
        <template #next>
          <v-btn class="white-arrow" variant="elevated" icon size="65">
            <IconArrow type="next" />
          </v-btn>
        </template>
      </navigation>
      <pagination />
    </template>
  </carousel>

  <image-control
    v-if="controlImage"
    :slides="slides"
    @changeSlide="handleChangeSlide"
  />
</template>

<style lang="scss">
  .product-card__carousel {
    .v-btn {
      background: rgba(255, 255, 255, 0.3) !important;
    }
  }

  .carousel__prev,
  .carousel__next {
    width: auto !important;
    height: auto !important;
  }

  .carousel__next--disabled,
  .carousel__prev--disabled {
    opacity: 1 !important;

    .arrow {
      background: #5f5f5f;
    }
  }

  .carousel__pagination {
    position: absolute;
    right: 50%;
    bottom: 30px !important;
    transform: translateX(50%) !important;

    &-button {
      overflow: hidden;

      &:after {
        width: 5px !important;
        height: 5px !important;
        background: #ffffff !important;
        border-radius: 50% !important;
      }

      &--active:after {
        width: 8px !important;
        height: 4px !important;
        border-radius: 30px !important;
        background-color: #1f74fd !important;
      }
    }
  }
</style>
