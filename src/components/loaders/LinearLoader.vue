<script setup>
  defineProps({
    isLoading: Boolean,
    height: Number,
  });
</script>
<template>
  <transition name="fade">
    <v-progress-linear
      v-show="isLoading"
      bg-color="rgba(33,150,243,0.2)"
      color="#1f74fd"
      indeterminate
      :height="height"
    />
  </transition>
</template>
<style>
  .v-progress-linear {
    position: absolute !important;
    top: 90px;
    left: 0;
    width: 100% !important;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
