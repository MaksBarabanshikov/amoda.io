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
