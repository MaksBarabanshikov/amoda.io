<script setup>
  import IconUser from '@/icons/iconUser.vue';
  import IconHeart from '@/icons/iconHeart.vue';
  import IconPlus from '@/icons/iconPlus.vue';
</script>

<template>
  <div class="header__buttons flex align-center justify-end">
    <v-btn class="bg-blue me-2" icon size="36">
      <IconHeart />
    </v-btn>

    <v-btn class="bg-blue me-4" icon size="36">
      <IconUser />
    </v-btn>

    <v-btn class="bg-blue">
      <IconPlus class="me-2" />
      <span>Добавить объявление</span>
    </v-btn>
  </div>
</template>
