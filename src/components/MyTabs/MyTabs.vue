<script setup>
  import { ref } from 'vue';

  const tab = ref(null);

  defineProps({
    tabItem: Array,
  });
</script>

<template>
  <div class="product-card__block">
    <v-card>
      <v-tabs
        grow
        v-model="tab"
        bg-color="#F4F4F4"
        color="#5F5F5F"
        class="text-sm font-medium leading-5 text-lowercase"
      >
        <v-tab value="Interior Properties">Interior Properties</v-tab>
        <v-tab value="Nearliness">Nearliness</v-tab>
        <v-tab value="Transportation">Transportation</v-tab>
        <v-tab value="Residence Type">Transportation</v-tab>
        <v-tab value="Accessible Housing">Accessible Housing</v-tab>
        <v-tab value="Accessible Housing2">Accessible Housing</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="Interior Properties">
            <h2 class="product-card__block-title">Interior Properties</h2>
            <v-list class="grid grid-cols-4">
              <v-list-item
                min-height="25"
                class="text-dark"
                v-for="content in tabItem"
                :key="content"
                :title="content"
              />
            </v-list>
          </v-window-item>
          <v-window-item value="Nearliness">
            <h2 class="product-card__block-title">Nearliness</h2>
            <v-list class="grid grid-cols-4">
              <v-list-item
                min-height="25"
                class="text-dark"
                v-for="content in tabItem"
                :key="content"
                :title="content"
              />
            </v-list>
          </v-window-item>
          <v-window-item value="Transportation">
            <h2 class="product-card__block-title">Transportation</h2>
            <v-list class="grid grid-cols-4">
              <v-list-item
                min-height="25"
                class="text-dark"
                v-for="content in tabItem"
                :key="content"
                :title="content"
              />
            </v-list>
          </v-window-item>
          <v-window-item value="Residence Type">
            <h2 class="product-card__block-title">Residence Type</h2>
            <v-list class="grid grid-cols-4">
              <v-list-item
                min-height="25"
                class="text-dark"
                v-for="content in tabItem"
                :key="content"
                :title="content"
              />
            </v-list>
          </v-window-item>
          <v-window-item value="Accessible Housing">
            <h2 class="product-card__block-title">Accessible Housing</h2>
            <v-list class="grid grid-cols-4">
              <v-list-item
                min-height="25"
                class="text-dark"
                v-for="content in tabItem"
                :key="content"
                :title="content"
              />
            </v-list>
          </v-window-item>
          <v-window-item value="Accessible Housing2">
            <h2 class="product-card__block-title">Accessible Housing</h2>
            <v-list class="grid grid-cols-4">
              <v-list-item
                min-height="25"
                class="text-dark"
                v-for="content in tabItem"
                :key="content"
                :title="content"
              />
            </v-list>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </div>
</template>
