<script setup>
  import person from '@/assets/img/image/person-card.png';
  import IconPhoto from '@/icons/iconPhoto.vue';
  import IconHeartOffer from '@/icons/iconHeartOffer.vue';
  import IconLocation from '../../../icons/iconLocation.vue';
  import IconVideo from '../../../icons/iconVideo.vue';

  const emit = defineEmits(['toggle']);

  const props = defineProps({
    id: Number,
    active: Boolean,
  });

  const handleClick = () => emit('toggle', props.id);
</script>

<template>
  <v-card link rounded class="offer-card w-100" elevation="0">
    <v-sheet class="position-relative">
      <v-img
        transition="500"
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="180"
        cover
      />
      <div
        class="offer-card__static d-flex align-center position-absolute text-white"
      >
        <div class="d-flex align-center me-2">
          <icon-photo class="me-1" />
          <span>10</span>
        </div>
        <div class="d-flex align-center">
          <icon-video class="me-1" />
          <span>10</span>
        </div>
      </div>
    </v-sheet>
    <div class="offer-card__content pa-4">
      <v-card-title class="offer-card__title text-left">
        The Hills at Oakwood Apartment Homes
      </v-card-title>

      <v-card-subtitle
        class="offer-card__subtitle text-left d-flex align-center"
      >
        <icon-location class="icon" />Jersey Pike, Chattanooga,
      </v-card-subtitle>

      <h3 class="offer-card__price text-left">1000 TL</h3>

      <p class="offer-card__text text-left">
        Get inspired at The Hills at Oakwood, where opportunity and a
        comfortable home awaits. Offering pet-friendly one, two, and three
        bedroom apartments ...
      </p>

      <v-card-actions class="offer-card__actions flex align-center h-[38px]">
        <v-img :src="person" />
        <span>Walker Robinson</span>
        <v-spacer></v-spacer>
        <v-btn
          @click="handleClick"
          class="offer-card__actions_btn bg-gray pa-2"
          :class="{ active }"
          icon
          size="30"
        >
          <IconHeartOffer />
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<style lang="scss">
  .offer-card {
    border: none !important;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.05) !important;

    &__static {
      left: 20px;
      bottom: 18px;
      font-weight: 500;
      font-size: 12px;
      line-height: 160%;
    }

    &__title {
      padding: 0 !important;
      font-weight: 500 !important;
      font-size: 18px !important;
      line-height: 22px !important;
      white-space: normal;
      margin-bottom: 10px;
      color: #2e2e2e;
      transition: all 0.15s ease-in-out;
    }

    .offer-card__content {
      transition: background-color 0.15s ease-in-out;
    }

    &:hover .offer-card__title {
      color: #1f74fd;
    }

    .v-card__overlay {
      opacity: 0 !important;
    }

    &:hover .offer-card__content {
      background-color: #fff !important;
    }

    &__content {
      background-color: #fafafa;
    }

    &__subtitle {
      padding: 0 !important;
      margin-bottom: 10px;
      font-weight: 400;
      font-size: 12px;
      line-height: 160%;
      color: #5f5f5f;

      .icon {
        margin-right: 4px;
      }
    }

    &__price {
      margin-bottom: 15px;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #1f74fd;
    }

    &__text {
      font-weight: 400;
      font-size: 12px;
      line-height: 150%;
      font-style: normal;
      color: #5f5f5f;
      margin-bottom: 16px;
    }

    &__actions {
      padding: 0;

      .v-img {
        max-width: 38px;
        margin-right: 8px;
      }

      span {
        font-weight: 500;
        font-size: 12px;
        line-height: 160%;
        color: #2e2e2e !important;
      }

      .v-btn {
        svg {
          margin-top: 1px;
        }
      }

      .v-btn.active {
        background: linear-gradient(210.64deg, #2485fd 6.88%, #1859fe 91.15%),
          #2653f2 !important;
      }
      img {
        width: 38px !important;
      }
    }
  }
</style>
