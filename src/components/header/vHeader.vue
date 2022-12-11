<script setup>
  import VLogo from '@/icons/VLogo.vue';
  import VNav from '@/components/header/vNav.vue';

  const navItems = ['Аренда', 'Продажа', 'Новостройки', 'Коммерческая'];
</script>

<template>
  <header class="header flex">
    <v-logo class="header__logo" />
    <v-nav class="header__nav" :items="navItems" />
  </header>
</template>
