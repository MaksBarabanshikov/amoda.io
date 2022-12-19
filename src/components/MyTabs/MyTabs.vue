<script setup>
  import { ref } from 'vue';
  import IconCheck from '@/icons/iconCheck.vue';

  const tab = ref(null);

  defineProps({
    tabItem: Array,
  });

  const tabData = [
    {
      value: 'Interior Properties',
      title: 'Interior Properties',
    },
    {
      value: 'Nearliness',
      title: 'Nearliness',
    },
    {
      value: 'Transportation',
      title: 'Transportation',
    },
    {
      value: 'Transportation2',
      title: 'Transportation',
    },
    {
      value: 'Accessible Housing',
      title: 'Accessible Housing',
    },
    {
      value: 'Accessible Housing2',
      title: 'Accessible Housing',
    },
  ];
</script>

<template>
  <v-card class="my-tab">
    <v-tabs grow v-model="tab" bg-color="#F4F4F4">
      <template v-for="tabItem in tabData" :key="tabItem.value">
        <v-tab :value="tabItem.value">{{ tabItem.title }}</v-tab>
      </template>
    </v-tabs>
    <v-card-text>
      <v-window v-model="tab">
        <template v-for="tabTitle in tabData" :key="tabTitle.value">
          <v-window-item :value="tabTitle.value">
            <h2 class="product-card__block-title">{{ tabTitle.title }}</h2>
            <v-list class="grid grid-cols-4">
              <v-list-item
                min-height="25"
                class="text-dark"
                v-for="content in tabItem"
                :key="content"
              >
                <v-list-item-title class="d-flex align-center">
                  <span>
                    {{ content.text }}
                  </span>
                  <v-spacer class="border-dotted" />
                  <div class="icon">
                    <IconCheck :checked="content.checked" />
                  </div>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-window-item>
        </template>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<style lang="scss">
  .my-tab {
    box-shadow: none !important;

    .v-slide-group__container {
      border-radius: 10px 10px 0 0;
      @media (max-width: 1000px) {
        border-radius: 0 !important;
      }
    }

    .v-btn--density-default {
      color: #5f5f5f !important;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
    }

    .v-slide-group-item--active {
      color: #fff !important;
    }

    @media (max-width: 1000px) {
      padding: 20px 15px !important;
      background-color: #fff !important;
    }

    .v-list-item-title {
      max-width: 170px;
      @media (max-width: 764px) {
        max-width: 300px;
      }
      .border-dotted {
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 20px;
        margin: 0 10px;
        &:after {
          position: absolute;
          content: '........................................................';
          display: block;
          white-space: nowrap;
          overflow: hidden;
          color: #c1c1c1;
          font-size: 8px;
          letter-spacing: 5px;
        }
      }

      .icon {
        min-width: 8px !important;
      }

      @media (max-width: 1000px) {
        font-size: 11px !important;
        line-height: 230%;
        margin-right: 5px;
      }
    }

    .v-tabs {
      @media (max-width: 1000px) {
        height: auto;
        background: #fff !important;
      }
    }

    .v-card-text {
      background-color: #fff !important;
      @media (max-width: 1000px) {
        padding: 0 !important;
      }
      h2 {
        @media (max-width: 1000px) {
          display: none;
        }
      }
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));

      @media (max-width: 1000px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }

      @media (max-width: 574px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    .v-tab {
      @media (max-width: 1000px) {
        margin: 1px 0;
        background: linear-gradient(0deg, #f4f4f4, #f4f4f4), #2653f2;
      }
    }
    .v-slide-group__content {
      @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;
      }
    }
  }
</style>
