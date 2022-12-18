<script setup>
  import VHeader from '@/components/header/vHeader.vue';
  // import MyFooter from '@/components/footer/MyFooter.vue';
  import MyBreadcrumbs from '@/components/myBreadcrumbs/myBreadcrumbs.vue';
</script>

<template>
  <v-app theme="">
    <v-header />
    <v-main class="mt-1">
      <v-container>
        <my-breadcrumbs />
        <router-view></router-view>
      </v-container>
    </v-main>
    <!--    <my-footer />-->
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
