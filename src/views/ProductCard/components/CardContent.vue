<script setup>
  import mapImage from '@/assets/img/image/map.png';
  import MyCarousel from '@/components/MyCarousel/MyCarousel.vue';
  import TextBlock from '@/views/ProductCard/components/TextBlock.vue';
  import MyTabs from '@/components/MyTabs/MyTabs.vue';

  const colors = [
    'indigo',
    'warning',
    'pink darken-2',
    'red lighten-1',
    'deep-purple accent-4',
  ];

  const slides = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Fifth'];

  const tabItem = [
    {
      text: 'Amusement  Center',
      checked: true,
    },
    {
      text: 'Cemevi',
      checked: true,
    },
    {
      text: 'Church',
      checked: true,
    },
    {
      text: 'City Center',
      checked: true,
    },
    {
      text: 'Fair',
      checked: true,
    },
    {
      text: 'Fire Departmant',
      checked: true,
    },
    {
      text: 'Grocery',
      checked: true,
    },
    {
      text: 'Cemevi',
      checked: true,
    },
    {
      text: 'Amusement  Center',
      checked: true,
    },
    {
      text: 'Cemevi',
      checked: true,
    },
    {
      text: 'Amusement  Center',
      checked: true,
    },
    {
      text: 'Cemevi',
      checked: true,
    },
    {
      text: 'Church',
      checked: true,
    },
    {
      text: 'City Center',
      checked: true,
    },
    {
      text: 'Fair',
      checked: true,
    },
    {
      text: 'Fire Departmant',
      checked: true,
    },
    {
      text: 'Grocery',
      checked: true,
    },
    {
      text: 'Cemevi',
      checked: true,
    },
    {
      text: 'Amusement  Center',
      checked: true,
    },
    {
      text: 'Cemevi',
      checked: true,
    },
  ];
</script>
<template>
  <v-col class="product-card__content" cols="9">
    <my-carousel :colors="colors" :slides="slides" control-image />
    <text-block />
    <my-tabs :tab-item="tabItem" />
    <div class="product-card__map mb-0">
      <v-img :src="mapImage" />
    </div>
  </v-col>
</template>

<style lang="scss">
  .product-params {
    .v-list-item-title {
      @apply text-dark text-xl font-medium;
    }
    .v-list-item-subtitle {
      @apply text-grayDark text-base;
    }
  }
  .product-card__content {
    & > * {
      margin-bottom: 20px;
    }
  }
  .product-card__block {
    @apply bg-white rounded-10;

    &-title {
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      margin-bottom: 10px;
    }

    &-text {
      font-weight: 400;
      font-size: 15px;
      line-height: 200%;
    }
  }
  .product-card__info {
    .v-list-item {
      padding: 0 !important;
    }
  }
  .v-slide-group__prev,
  .v-slide-group__next {
    display: none !important;
  }
  .v-tab {
    text-transform: none !important;
    line-height: 17px !important;
    &:hover {
      background-color: #eaeaea;
    }

    &--selected {
      background: linear-gradient(210.64deg, #2485fd 6.88%, #1859fe 91.15%),
        #2653f2 !important;
      color: #fff !important;
    }
  }

  .v-card-text {
    padding: 40px !important;
  }

  .grid {
    .v-list-item {
      padding: 0 !important;
    }
    .v-list-item-title {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 200%;
    }
  }
</style>
