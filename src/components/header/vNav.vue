<script setup>
  defineProps({
    items: Array,
  });
</script>
<template>
  <nav>
    <ul class="flex align-center justify-center ma-auto h-100">
      <li class="ml-7" v-for="item in items" :key="item">
        <a>{{ item }}</a>
      </li>
    </ul>
  </nav>
</template>
