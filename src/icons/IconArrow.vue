<script setup>
  import prev from '@/assets/img/icons/prev.svg';
  import next from '@/assets/img/icons/next.svg';

  defineProps({
    type: String,
  });
</script>

<template>
  <template v-if="type === 'next'">
    <img :src="next" :alt="type" />
  </template>

  <template v-if="type === 'prev'">
    <img :src="prev" :alt="type" />
  </template>
</template>
