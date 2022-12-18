<script setup>
  import VNav from '@/components/header/vNav.vue';
  import { navItems } from '@/helper/index.js';
  import IconWallet from '@/icons/IconWallet.vue';
  import IconLocale from '@/icons/IconLocale.vue';
</script>

<template>
  <v-footer class="footer bg-white" elevation="3">
    <v-container class="d-flex">
      <v-row class="align-center justify-space-between">
        <v-col class="text-center text-lg-left" cols="12" lg="2">
          <span>© 2022 Amoda.io </span>
        </v-col>
        <v-col cols="12" lg="8">
          <v-nav class="text-center" :items="navItems" />
        </v-col>
        <v-col
          cols="12"
          lg="2"
          class="d-flex flex-column text-lg-left flex-lg-row align-center"
        >
          <a class="d-flex align-center cursor-pointer mb-5 ma-lg-0">
            <IconWallet class="me-1" />
            <span>USD ($)</span>
          </a>
          <a class="d-flex align-center cursor-pointer">
            <IconLocale class="me-1" />
            <span>Русский (Ru)</span>
          </a>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style lang="scss">
  .footer {
    font-weight: 500;
    font-size: 14px;
    line-height: 160%;
    margin-top: 100px;
  }
</style>
