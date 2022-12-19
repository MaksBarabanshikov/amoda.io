<script setup>
  defineProps({
    items: Array,
  });
</script>
<template>
  <v-list class="d-md-flex justify-center pa-0">
    <v-list-item v-for="item in items" link :key="item" :title="item" rounded />
  </v-list>
</template>

<style>
  .v-list-item-title {
    color: #2e2e2e !important;
    font-weight: 500 !important;
    font-size: 14px !important;
    line-height: 160% !important;
  }
</style>
