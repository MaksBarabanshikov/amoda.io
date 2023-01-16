<script setup>
  import InformationIcon from '@/icons/information/informationIcon.vue';
  import StickyJohny from '@/views/ProductCard/components/StickyJohny.vue';
  import { useDisplay } from 'vuetify';
  import { useProductCardStore } from '@/store/productCardStore.js';
  import { storeToRefs } from 'pinia';

  const { mobile } = useDisplay();

  const store = useProductCardStore();

  const { description, information, baseProp } = storeToRefs(store);
</script>

<template>
  <div class="product-card__block">
    <v-list
      class="product-params d-flex justify-space-between text-center pa-0"
    >
      <v-list-item
        v-for="param in baseProp"
        :key="param[1].title"
        class="pr-4 pr-md-0 pa-0"
      >
        <v-list-item-title class="text-center">{{
          param[1].value
        }}</v-list-item-title>
        <v-list-item-subtitle class="text-center">{{
          param[1].title
        }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </div>
  <sticky-johny class="w-100" v-if="mobile" />
  <div class="product-card__block">
    <div v-html="description" />
    <!--    <h2 class="product-card__block-title">Ultra luxurious</h2>-->
    <!--    <p class="product-card__block-text">-->
    <!--      Our pet-friendly community offers 2 resort-style swimming pools and a-->
    <!--      fully-equipped, 24-hour fitness center. Located within the highly regarded-->
    <!--      Plano Independent School District, Camden Legacy Creek offers easy access-->
    <!--      to the Dallas North Tollway and is only minutes from Stonebriar and-->
    <!--      Willowbend Malls with direct access to the Bluebonnet Walking Trail.-->
    <!--      Camden residents can take advantage of an exclusive discount with CORT to-->
    <!--      rent furniture and accessories for your apartment home. Pricing and-->
    <!--      availability are subject to change until a quote is saved. Call or visit-->
    <!--      camdenliving.com to save a quote.-->
    <!--    </p>-->
  </div>
  <div class="product-card__block product-card__info">
    <h2 class="product-card__block-title">Information</h2>
    <v-list>
      <v-list-item
        min-height="25"
        class="text-dark"
        v-for="infoItem in information"
        :key="infoItem[1].title"
      >
        <template v-slot:prepend>
          <information-icon :type="infoItem[1].title" />
        </template>
        <v-list-item-title>{{ infoItem[1].title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<style lang="scss">
  .offer-param {
    padding-right: 128px !important;

    @media (max-width: 776px) {
      padding-right: 40px !important;
    }
  }
  .product-params {
    .v-list-item-title {
      font-weight: 500 !important;
      font-size: 22px !important;
      line-height: 130% !important;
      @media screen and (max-width: 1000px) {
        font-size: 16px !important;
        color: #2e2e2e !important;
      }

      @media screen and (max-width: 568px) {
        font-size: 14px !important;
      }
    }
    .v-list-item-subtitle {
      font-weight: 400 !important;
      font-size: 18px !important;
      line-height: 130% !important;
      color: #5f5f5f !important;
      @media screen and (max-width: 1000px) {
        font-size: 14px !important;
      }
    }
  }
  .product-card__info {
    .v-list {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));

      @media (max-width: 1000px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      &-item-title {
        @media (max-width: 1000px) {
          font-size: 13px;
          line-height: 220%;
        }
      }
    }
  }
</style>
