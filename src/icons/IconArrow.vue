<script setup>
  defineProps({
    type: String,
  });
</script>

<template>
  <template v-if="type === 'next'">
    <div class="arrow arrow-next" />
  </template>

  <template v-if="type === 'prev'">
    <div class="arrow arrow-prev" />
  </template>
</template>

<style lang="scss">
  .arrow-prev {
    width: 7px;
    height: 13px;
    -webkit-mask: url('../assets/img/icons/prev.svg') no-repeat center;
    mask: url('../assets/img/icons/prev.svg') no-repeat center;
  }

  .arrow-next {
    width: 7px;
    height: 13px;
    -webkit-mask: url('../assets/img/icons/next.svg') no-repeat center;
    mask: url('../assets/img/icons/next.svg') no-repeat center;
  }

  .white-arrow {
    .arrow {
      background-color: #fff;
    }
  }

  .blue-arrow {
    .arrow {
      transition: all 0.15s ease-in-out;
      background-color: #1f74fd;
    }
  }
</style>
