<script setup>
  import glorax from '@/assets/img/image/glorax.png';
  import IconHeart from '@/icons/iconHeart.vue';
  import IconShare from '@/icons/iconShare.vue';
  import IconPrint from '@/icons/iconPrint.vue';
  import IconBell from '@/icons/iconBell.vue';
  import { useProductCardStore } from '@/store/productCardStore.js';
  // import { useMainStore } from '@/store/mainStore.js';
  import { storeToRefs } from 'pinia';
  import { computed } from 'vue';

  const productStore = useProductCardStore();
  // const mainStore = useMainStore();

  const { productData } = storeToRefs(productStore);

  // const list = [
  //   {
  //     title: 'Deposit: ',
  //     content: '800 $',
  //   },
  //   {
  //     title: 'Commission: ',
  //     content: '800 $',
  //   },
  //   {
  //     title: 'Aidat: ',
  //     content: '60 $',
  //   },
  // ];

  const getPrices = computed(() => productData.value.data.prices.USD);

  const getUser = computed(() => productData.value.data.user);
</script>

<template>
  <v-col sm="12" lg="3" class="pa-0">
    <div class="sticky-johny sticky">
      <v-sheet color="#fff" rounded class="sticky-johny__head">
        <h3>{{ getPrices.full }} $</h3>
        <span>from {{ getPrices.full }} $/month in mortgage</span>
        <v-list>
          <v-list-item min-height="26">
            <div class="d-flex align-center">
              <h6>Deposit:&nbsp;</h6>
              <span>{{ getPrices.deposit }} $</span>
            </div>
          </v-list-item>
          <v-list-item min-height="26">
            <div class="d-flex align-center">
              <h6>Commission:&nbsp;</h6>
              <span>{{ getPrices.commission }} $</span>
            </div>
          </v-list-item>
          <v-list-item min-height="26">
            <div class="d-flex align-center">
              <h6>Aidat:&nbsp;</h6>
              <span>{{ getPrices.aidat }} $</span>
            </div>
          </v-list-item>
        </v-list>
        <span class="sticky-johny__monitor-price d-flex align-center"
          ><icon-bell class="me-2" /> Monitor price changes
        </span>
      </v-sheet>
      <div class="sticky-johny__body">
        <div class="sticky-johny__body_info">
          <div class="d-flex">
            <v-img
              :src="getUser.photo"
              class="rounded-circle mr-3"
              sizes="80"
              alt="user"
              cover
            />
            <div>
              <div class="person mb-1">
                <span>{{ getUser.type }}</span>
                <h6>{{ getUser.name }}</h6>
              </div>
              <a style="cursor: pointer" class="text-primary">
                {{ getUser.adv_count }} advertisements
              </a>
            </div>
          </div>
          <div class="text-center">
            <img
              class="sticky-johny__body_company mx-auto mt-8 mb-2"
              :src="glorax"
              alt="glorax"
            />
          </div>
          <div class="sticky-johny__body_license d-block text-center mb-3">
            Licence: <span>474648837373</span>
          </div>
          <v-btn
            variant="flat"
            class="primary-gradient text-white rounded-lg w-100"
            height="48"
          >
            <span>Show phone</span>
          </v-btn>

          <v-btn
            variant="flat"
            class="green-gradient text-white rounded-lg w-100 mt-3"
            height="48"
          >
            <span>Write to Whatsapp</span>
          </v-btn>
        </div>
      </div>
      <div class="sticky-johny__footer text-center p-5">
        <v-btn class="bg-gray me-2" variant="plain" icon size="42">
          <IconShare />
        </v-btn>
        <v-btn class="bg-gray me-2" variant="plain" icon size="42">
          <IconPrint />
        </v-btn>
        <v-btn class="bg-gray" variant="plain" icon size="42">
          <IconHeart />
        </v-btn>
      </div>
    </div>
  </v-col>
</template>

<style lang="scss" scoped>
  .v-list-item {
    padding: 0 !important;
  }

  .sticky-johny {
    padding-left: 20px;

    @media (max-width: 1279px) {
      margin-top: 20px;
      padding-left: 0;
    }
    & > div {
      background: #fff;
      border-radius: 10px;
      margin-bottom: 20px;
    }
    &__head,
    &__body {
      padding: 30px 40px;

      @media (max-width: 1000px) {
        padding: 15px 20px;
      }
    }

    &__footer {
      padding: 20px;

      .v-btn:hover {
        background: linear-gradient(210.64deg, #2485fd 6.88%, #1859fe 91.15%),
          #2653f2 !important;
      }
    }

    &__head {
      h3 {
        font-weight: 500;
        font-size: 30px;
        line-height: 37px;
        color: #1f74fd;
        margin-bottom: 4px;

        @media (max-width: 1000px) {
          font-weight: 500;
          font-size: 22px;
          line-height: 27px;
        }
      }

      span {
        font-weight: 400;
        font-size: 15px;
        line-height: 150%;
        color: #5f5f5f;
        @media (max-width: 1000px) {
          font-size: 13px;
        }
      }

      h6 {
        color: #2e2e2e;
        font-weight: 500;
        font-size: 14px;
        line-height: 150%;

        @media (max-width: 1000px) {
          font-size: 15px;
        }
      }

      .v-list {
        margin-top: 15px;
        margin-bottom: 15px;
        padding: 0;

        @media (max-width: 1000px) {
          margin: 10px 0;
        }

        span {
          color: #5f5f5f;
          font-weight: 500;
          font-size: 14px;
          line-height: 150%;

          @media (max-width: 1000px) {
            font-weight: 400;
            font-size: 13px;
            line-height: 150%;
            margin-top: 3px;
          }
        }
      }

      .sticky-johny__monitor-price {
        transition: all 0.15s ease-in-out;
        cursor: pointer;

        &:hover {
          color: #1f74fd;

          .icon {
            color: #1f74fd;
          }
        }
      }
    }

    &__body {
      &_info {
        .v-img {
          max-width: 80px !important;
          max-height: 80px !important;
        }
        .person {
          span {
            font-weight: 400;
            font-size: 13px;
            line-height: 160%;
            color: #5f5f5f;
          }
          h6 {
            font-weight: 500;
            font-size: 16px;
            line-height: 160%;
            color: #2e2e2e;
          }
        }
      }

      &_license {
        font-weight: 500;
        font-size: 13px;
        line-height: 160%;
        color: #2e2e2e;

        span {
          color: #5f5f5f !important;
        }
      }

      .v-btn {
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        color: #ffffff;
        border-radius: 10px !important;
      }
    }

    &__footer {
      .v-btn {
        & > * {
          transition: all 0.15s ease-in-out;
        }
      }
    }
  }
</style>
