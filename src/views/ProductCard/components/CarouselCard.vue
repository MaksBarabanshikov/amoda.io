<script setup>
  import person from '@/assets/img/image/person-card.png';
  import IconHeart from '@/icons/iconHeart.vue';
</script>

<template>
  <v-card link rounded class="carousel-card w-100">
    <v-img
      transition="500"
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="180"
      cover
    />
    <div class="carousel-card__content p-4">
      <v-card-title class="carousel-card__title">
        The Hills at Oakwood Apartment Homes
      </v-card-title>

      <v-card-subtitle class="carousel-card__subtitle text-left">
        Jersey Pike, Chattanooga,
      </v-card-subtitle>

      <h3 class="carousel-card__price text-left">1000 TL</h3>

      <p class="carousel-card__text text-left">
        Get inspired at The Hills at Oakwood, where opportunity and a
        comfortable home awaits. Offering pet-friendly one, two, and three
        bedroom apartments ...
      </p>

      <v-card-actions class="carousel-card__actions flex align-center h-[38px]">
        <v-img width="10" :src="person" />
        <span>Walker Robinson</span>
        <v-spacer></v-spacer>
        <v-btn class="primary-gradient" icon size="30">
          <IconHeart />
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<style lang="scss">
  .carousel-card {
    border: none !important;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05) !important;
    &__title {
      padding: 0 !important;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 10px;
      color: #1f74fd;
    }

    &__subtitle {
      padding: 0 !important;
      margin-bottom: 10px;
      font-weight: 400;
      font-size: 12px;
      line-height: 160%;
      color: #5f5f5f;
    }

    &__price {
      margin-bottom: 15px;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #1f74fd;
    }

    &__text {
      font-weight: 400;
      font-size: 12px;
      line-height: 150%;
      font-style: normal;
      color: #5f5f5f;
      margin-bottom: 16px;
    }
    &__actions {
      padding: 0;

      img {
        width: 38px !important;
      }
    }
  }
</style>
