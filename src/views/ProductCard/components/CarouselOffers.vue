<script setup>
  import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
  import IconArrow from '@/icons/IconArrow.vue';
  import CarouselCard from '@/views/ProductCard/components/CarouselCard.vue';
  import { reactive, ref } from 'vue';
  import { useDisplay } from 'vuetify';

  const settings = reactive({
    itemsToShow: 4,
    transition: 700,
    snapAlign: 'start',
  });

  const { mobile } = useDisplay();

  const breakpoints = {
    1200: {
      itemsToShow: 4,
    },
    754: {
      itemsToShow: 2,
    },
    300: {
      itemsToShow: 1,
    },
  };

  const slidesRes = [
    {
      id: '12',
      active: true,
    },
    {
      id: '13',
      active: false,
    },
    {
      id: '14',
      active: false,
    },
    {
      id: '15',
      active: false,
    },
    {
      id: '16',
      active: false,
    },
    {
      id: '17',
      active: false,
    },
    {
      id: '18',
      active: false,
    },
  ];

  const slides = ref(slidesRes);

  const toggleFavourites = (id) => {
    console.log('123');
    return (slides.value[id].active = !slides.value[id].active);
  };
</script>
<template>
  <div class="product-card__block product-card__test py-lg-10 mt-5">
    <div class="px-lg-12">
      <h2 class="product-card__block-title mb-lg-7">Nearliness</h2>
      <div class="carousel-cards">
        <carousel :settings="settings" :breakpoints="breakpoints">
          <slide v-for="(slide, index) in slides" :key="slide.id">
            <carousel-card
              :id="index"
              :active="slide.active"
              @toggle="toggleFavourites"
            />
          </slide>
          <template #addons>
            <navigation v-if="!mobile">
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
            <pagination v-if="mobile" />
          </template>
        </carousel>
      </div>
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

    .carousel__pagination {
      bottom: -20px !important;

      &-button {
        &:after {
          background-color: #e2e2e2 !important;
        }

        &--active:after {
          background-color: #1f74fd !important;
        }
      }
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
