<script setup>
  import VLogo from '@/icons/VLogo.vue';
  import VNav from '@/components/header/vNav.vue';
  import HeaderButtons from '@/components/header/HeaderButtons.vue';

  const navItems = ['Аренда', 'Продажа', 'Новостройки', 'Коммерческая'];
</script>

<template>
  <header class="header py-4 bg-white">
    <v-app-bar>
      <div class="container grid grid-cols-12 ma-auto">
        <v-logo class="header__logo col-span-2" />
        <v-nav class="header__nav col-span-7" :items="navItems" />
        <header-buttons class="col-span-3" />
      </div>
    </v-app-bar>
  </header>
</template>
