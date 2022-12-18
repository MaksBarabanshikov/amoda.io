<script setup>
  import VLogo from '@/icons/VLogo.vue';
  import VNav from '@/components/header/vNav.vue';
  import HeaderButtons from '@/components/header/HeaderButtons.vue';
  import { navItems } from '@/helper/index.js';
  import { useDisplay } from 'vuetify';
  import { ref } from 'vue';

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
    <v-nav class="header__nav h-100" :items="navItems" block />
  </v-navigation-drawer>
  <v-app-bar class="bg-white header" height="88">
    <v-container>
      <v-row>
        <v-col class="d-flex" sm="6" md="2">
          <v-app-bar-nav-icon
            class="me-2"
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
  .header__nav {
    @media (max-width: 1033px) {
      .v-list-item-title {
        font-size: 0.8rem !important;
      }
    }
    @media (max-width: 1033px) {
    }
  }

  .v-navigation-drawer {
    &__content {
      background: #fff;
    }
  }
</style>
