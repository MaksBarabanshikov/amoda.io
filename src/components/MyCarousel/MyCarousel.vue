<script setup>
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
  import IconArrow from '@/icons/IconArrow.vue';
  import ImageControl from '@/components/MyCarousel/ImageControl.vue';
  import { reactive, ref } from 'vue';
  import { useDisplay } from 'vuetify';
  import plug from '@/assets/img/image/slider-example.jpg';

  defineProps({
    slides: Array,
    colors: Array,
    controlImage: Boolean,
  });

  const settings = reactive({
    itemsToShow: 1,
    transition: 700,
    snapAlign: 'start',
  });

  const { mobile } = useDisplay();

  const mainCarousel = ref(null);

  const handleChangeSlide = (slide) => {
    return mainCarousel.value.slideTo(slide);
  };
</script>

<template>
  <carousel
    :settings="settings"
    ref="mainCarousel"
    class="product-card__carousel"
  >
    <slide
      v-for="slide in slides"
      class="rounded-10 overflow-hidden"
      :key="slide"
    >
      <v-img style="height: 500px" :lazy-src="plug" :src="slide.src" />
    </slide>
    <template #addons>
      <navigation>
        <template #prev>
          <v-btn class="white-arrow" variant="flat" icon size="65">
            <IconArrow type="prev" />
          </v-btn>
        </template>
        <template #next>
          <v-btn class="white-arrow" variant="flat" icon size="65">
            <IconArrow type="next" />
          </v-btn>
        </template>
      </navigation>
      <pagination />
    </template>
  </carousel>

  <image-control
    v-if="controlImage && !mobile"
    :slides="slides"
    @changeSlide="handleChangeSlide"
  />
</template>

<style lang="scss">
  .product-card__carousel {
    .v-btn {
      background: rgba(255, 255, 255, 0.3) !important;
      transition: all 0.15s ease-in-out;

      @media (max-width: 565px) {
        width: 45px !important;
        height: 45px !important;
      }
    }
    .carousel__prev {
      left: 23px !important;
      @media (max-width: 565px) {
        left: 10px !important;
      }
    }

    .carousel__next {
      right: 23px !important;
      @media (max-width: 565px) {
        right: 10px !important;
      }
    }
  }

  .carousel__prev,
  .carousel__next {
    opacity: 1 !important;
    width: auto !important;
    height: auto !important;
    transition: all 0.15s ease-in-out;
  }

  .carousel__next--disabled,
  .carousel__prev--disabled {
    opacity: 1 !important;
    .v-btn--variant-elevated {
      opacity: 1 !important;
    }

    .v-btn--variant-flat {
      opacity: 0.5 !important;
    }

    .arrow {
      background: #5f5f5f;
    }
  }

  .carousel__pagination {
    position: absolute;
    right: 50%;
    bottom: 30px !important;
    transform: translateX(50%) !important;
    background: transparent;

    &-item {
      margin-right: 11px !important;
      &:last-child {
        margin-right: 0 !important;
      }
    }

    &-button {
      &:after {
        transition: all 0.2s ease-in-out;
        width: 5px !important;
        height: 5px !important;
        background-color: #ffffff !important;
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
