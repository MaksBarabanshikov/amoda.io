<script setup>
  import { useDisplay } from 'vuetify';
  import { computed } from 'vue';

  const { mobile } = useDisplay();

  const props = defineProps({
    isOpen: Boolean,
  });

  const emit = defineEmits(['update:isOpen']);

  const myIsOpen = computed({
    get() {
      return props.isOpen;
    },
    set(newValue) {
      emit('update:isOpen', newValue);
    },
  });
</script>

<template>
  <v-navigation-drawer
    v-if="mobile"
    elevation="2"
    v-model="myIsOpen"
    sticky
    border="none"
  >
    <v-list-item class="pt-2">
      <v-logo />
    </v-list-item>
    <v-nav class="header__nav h-100" :items="navItems" block />
    <v-list-item> </v-list-item>
  </v-navigation-drawer>
</template>
