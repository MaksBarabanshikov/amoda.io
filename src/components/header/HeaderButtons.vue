<script setup>
  import IconUser from '@/icons/iconUser.vue';
  import IconHeart from '@/icons/iconHeart.vue';
  import IconPlus from '@/icons/iconPlus.vue';
  import { useDisplay } from 'vuetify';

  const { mobile } = useDisplay();
</script>

<template>
  <div class="header__buttons d-flex align-center justify-end h-100">
    <v-btn class="primary-gradient me-2" icon size="36">
      <IconHeart />
    </v-btn>

    <v-btn class="primary-gradient me-md-4 me-0" icon size="36">
      <IconUser />
    </v-btn>

    <v-btn
      v-if="!mobile"
      class="my-btn primary-gradient text-white rounded-10"
      height="48"
      width="240"
    >
      <IconPlus />
      <span>Добавить объявление</span>
    </v-btn>
  </div>
</template>
