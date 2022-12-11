<script setup>
  defineProps({
    items: Array,
  });
</script>
<template>
  <nav>
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </nav>
</template>
