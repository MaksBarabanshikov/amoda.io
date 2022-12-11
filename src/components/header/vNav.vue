<script setup>
  defineProps({
    items: Array,
  });
</script>
<template>
  <nav>
    <ul class="grid grid-cols-4 align-center ma-auto h-100 w-50">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </nav>
</template>
