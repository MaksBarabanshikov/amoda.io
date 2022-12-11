<script setup>
  import VHeader from '@/components/header/vHeader.vue';
</script>

<template>
  <v-header />
  <main>
    <v-container>
      <v-breadcrumbs :items="['Real Estate', 'Sale']" divider="-" />
    </v-container>
  </main>
</template>
