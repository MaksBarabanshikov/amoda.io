<script setup>
  const colors = [
    'indigo',
    'warning',
    'pink darken-2',
    'red lighten-1',
    'deep-purple accent-4',
  ];
  const slides = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];

  const params = [
    {
      title: '260 м2',
      subtitle: 'total area',
    },
    {
      title: '240 м2',
      subtitle: 'living space',
    },
    {
      title: '40 м2',
      subtitle: 'kitchen',
    },
    {
      title: '9',
      subtitle: 'floor',
    },
    {
      title: 'No',
      subtitle: 'elevator',
    },
  ];

  const info = [
    {
      text: 'Children allowed',
    },
    {
      text: 'Pets allowed',
    },
    {
      text: 'Fridge',
    },
    {
      text: `Room’s furniture`,
    },
    {
      text: 'Television',
    },
    {
      text: 'Shower cabin',
    },
  ];
</script>
<template>
  <v-col class="product-card__content" cols="9">
    <v-carousel
      cycle
      height="500"
      hide-delimiter-background
      show-arrows="hover"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">{{ slide }} Slide</div>
          </div>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <div class="product-card__block py-10 px-12">
      <v-list class="product-params d-flex justify-space-between text-center">
        <v-list-item
          v-for="param in params"
          :key="param.subtitle"
          :title="param.title"
          :subtitle="param.subtitle"
        />
      </v-list>
    </div>
    <div class="product-card__block py-10 px-12">
      <h2 class="product-card__block-title">Ultra luxurious</h2>
      <p class="product-card__block-text">
        Our pet-friendly community offers 2 resort-style swimming pools and a
        fully-equipped, 24-hour fitness center. Located within the highly
        regarded Plano Independent School District, Camden Legacy Creek offers
        easy access to the Dallas North Tollway and is only minutes from
        Stonebriar and Willowbend Malls with direct access to the Bluebonnet
        Walking Trail. Camden residents can take advantage of an exclusive
        discount with CORT to rent furniture and accessories for your apartment
        home. Pricing and availability are subject to change until a quote is
        saved. Call or visit camdenliving.com to save a quote.
      </p>
    </div>
    <div class="product-card__block product-card__info py-10 px-12">
      <h2 class="product-card__block-title">Information</h2>
      <v-row>
        <v-col cols="6">
          <v-list>
            <v-list-item
              min-height="25"
              class="text-dark"
              v-for="infoItem in info"
              :key="infoItem.text"
              :title="infoItem.text"
            />
          </v-list>
        </v-col>
        <v-col cols="6">
          <v-list class="p-0">
            <v-list-item
              min-height="25"
              class="text-dark"
              v-for="infoItem in info"
              :key="infoItem.text"
              :title="infoItem.text"
            />
          </v-list>
        </v-col>
      </v-row>
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
</style>
