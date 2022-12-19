<script setup>
  import VLogo from '@/icons/VLogo.vue';
  import VNav from '@/components/header/vNav.vue';
  import HeaderButtons from '@/components/header/HeaderButtons.vue';
  import { navItems } from '@/helper/index.js';
  import { useDisplay } from 'vuetify';
  import { ref } from 'vue';
  import IconPlus from '@/icons/iconPlus.vue';

  const isOpen = ref(false);

  const { mdAndUp, mobile } = useDisplay();

  const changeIsOpen = () => (isOpen.value = !isOpen.value);
</script>

<template>
  <v-navigation-drawer
    v-if="mobile"
    elevation="2"
    v-model="isOpen"
    sticky
    border="none"
  >
    <v-list-item class="pt-2">
      <v-logo />
    </v-list-item>
    <v-nav class="header__nav" :items="navItems" block />
    <v-list-item class="px-1 py-2">
      <v-btn
        class="primary-gradient text-white rounded-lg"
        height="48"
        width="100%"
      >
        <IconPlus class="me-2" />
        <span style="font-size: 14px !important">Добавить объявление</span>
      </v-btn>
    </v-list-item>
  </v-navigation-drawer>
  <v-app-bar class="bg-white header" height="88">
    <v-container>
      <v-row no-gutters>
        <v-col class="d-flex pa-0 align-center" sm="6" md="2">
          <v-app-bar-nav-icon
            class="me-1"
            v-if="mobile"
            icon="mdi-menu"
            @click="changeIsOpen"
          />
          <v-logo />
        </v-col>
        <v-spacer v-if="!mobile" />
        <v-col v-if="mdAndUp" cols="6">
          <v-nav class="header__nav h-100" :items="navItems" />
        </v-col>
        <v-col sm="6" md="4">
          <header-buttons />
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<style lang="scss">
  .header {
    box-shadow: none !important;
  }
  .header__nav {
    @media (max-width: 1033px) {
      .v-list-item-title {
        font-size: 0.8rem !important;
      }
    }
  }

  .v-navigation-drawer {
    &__content {
      background: #fff;
    }
  }
</style>
