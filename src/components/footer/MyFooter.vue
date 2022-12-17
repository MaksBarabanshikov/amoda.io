<script setup>
  import VNav from '@/components/header/vNav.vue';
  import { navItems } from '@/helper/index.js';
  import IconWallet from '@/icons/IconWallet.vue';
  import IconLocale from '@/icons/IconLocale.vue';
</script>

<template>
  <v-footer class="footer bg-white mt-[100px]" elevation="3">
    <v-container class="d-flex">
      <v-row class="align-center justify-space-between">
        <v-col cols="2">
          <span>© 2022 Amoda.io </span>
        </v-col>
        <v-col cols="8">
          <v-nav :items="navItems" />
        </v-col>
        <v-col cols="2" class="d-flex justify-space-between">
          <a class="d-flex align-center cursor-pointer">
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
  }
</style>
