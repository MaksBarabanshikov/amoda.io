<script setup>
  import person from '@/assets/img/image/person.jpg';
  import glorax from '@/assets/img/image/glorax.png';
  import IconHeart from '@/icons/iconHeart.vue';
  import IconShare from '@/icons/iconShare.vue';
  import IconPrint from '@/icons/iconPrint.vue';
  import IconBell from '@/icons/iconBell.vue';

  const list = [
    {
      title: 'Deposit: ',
      content: '800 $',
    },
    {
      title: 'Commission: ',
      content: '800 $',
    },
    {
      title: 'Aidat: ',
      content: '60 $',
    },
  ];
</script>

<template>
  <v-col class="pb-lg-2 px-0" sm="12" lg="3">
    <div class="sticky-johny sticky top-20">
      <v-sheet color="#fff" rounded class="sticky-johny__head">
        <h3>150 000 $</h3>
        <span>from 1500 $/month in mortgage</span>
        <v-list>
          <v-list-item v-for="item in list" :key="item.title" min-height="26">
            <div class="d-flex align-center">
              <h6>{{ item.title }}&nbsp;</h6>
              <span>{{ item.content }}</span>
            </div>
          </v-list-item>
        </v-list>
        <span class="d-flex align-center"
          ><icon-bell class="me-2" /> Monitor price changes
        </span>
      </v-sheet>
      <div class="sticky-johny__body mt-4">
        <div class="sticky-johny__body_info">
          <div class="d-flex">
            <v-img :src="person" class="rounded-circle mr-3" />
            <div>
              <div class="person leading-5 mb-1">
                <span>Private person</span>
                <h6>Vladimir Smirnov</h6>
              </div>
              <a class="text-blue font-medium"> 7 advertisements </a>
            </div>
          </div>
          <img
            class="sticky-johny__body_company ma-auto mt-8 mb-2"
            :src="glorax"
            alt=""
          />
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
      <div class="sticky-johny__footer mt-4 text-center p-5">
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
    & > div {
      background: #fff;
      border-radius: 10px;
    }
    &__head,
    &__body {
      padding: 30px 40px;

      @media (max-width: 1000px) {
        padding: 15px 20px;
      }
    }

    &__footer {
      @apply p-5;
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
          font-weight: 400;
          font-size: 13px;
          line-height: 150%;
        }
      }

      .v-list {
        margin-top: 15px;
        margin-bottom: 15px;
        padding: 0;

        @media (max-width: 1000px) {
          margin: 10px 0;
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
          h4 {
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
