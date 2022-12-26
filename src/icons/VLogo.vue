<script setup>
  import logo from '@/assets/img/icons/logo.svg';
</script>
<template>
  <img :src="logo" alt="amoda.io" />
</template>

<style lang="scss" scoped>
  img {
    @media (max-width: 335px) {
      width: 144px;
    }
  }
</style>
