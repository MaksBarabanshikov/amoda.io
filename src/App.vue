<script setup>
  import VHeader from '@/components/header/vHeader.vue';
  import ProductCard from '@/views/ProductCard/ProductCard.vue';
</script>

<template>
  <v-app theme="">
    <v-header />
    <v-main>
      <v-container>
        <v-breadcrumbs :items="['Real Estate', 'Sale']" divider="-" />
        <product-card />
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
  @font-face {
    font-family: 'Commissioner';
    font-weight: 400;
    font-style: normal;
    src: local('Commissioner'),
      url(./assets/fonts/Commissioner-Regular.ttf) format('truetype');
  }
  @font-face {
    font-family: 'Commissioner';
    font-weight: 500;
    font-style: normal;
    src: local('Commissioner'),
      url(./assets/fonts/Commissioner-Medium.ttf) format('truetype');
  }
  @font-face {
    font-family: 'Commissioner';
    font-weight: 600;
    font-style: normal;
    src: local('Commissioner'),
      url(./assets/fonts/Commissioner-Bold.ttf) format('truetype');
  }
  @font-face {
    font-family: 'Commissioner';
    font-weight: 700;
    font-style: normal;
    src: local('Commissioner'),
      url(./assets/fonts/Commissioner-ExtraBold.ttf) format('truetype');
  }
</style>
