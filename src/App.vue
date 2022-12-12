<script setup>
  import VHeader from '@/components/header/vHeader.vue';
  import ProductCard from '@/views/ProductCard/ProductCard.vue';
</script>

<template>
  <v-app class="bg-gray">
    <v-header />
    <v-main>
      <v-container>
        <v-breadcrumbs :items="['Real Estate', 'Sale']" divider="-" />
        <product-card />
      </v-container>
    </v-main>
  </v-app>
</template>
