<script setup>
  import VHeader from '@/components/header/vHeader.vue';
  import ProductCard from '@/views/ProductCard/ProductCardView.vue';
  import MyFooter from '@/components/footer/MyFooter.vue';
  import MyBreadcrumbs from '@/components/myBreadcrumbs/myBreadcrumbs.vue';
</script>

<template>
  <v-app theme="">
    <v-header />
    <v-main>
      <v-container>
        <my-breadcrumbs />
        <product-card />
      </v-container>
    </v-main>
    <my-footer />
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

  .v-main {
    padding-top: 25px !important;
  }
</style>
