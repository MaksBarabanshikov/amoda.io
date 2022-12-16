<script setup>
  import person from '@/assets/img/image/person.jpg';
  import glorax from '@/assets/img/image/glorax.png';
  import IconHeart from '@/icons/iconHeart.vue';
  import IconShare from '@/icons/iconShare.vue';
  import IconPrint from '@/icons/iconPrint.vue';

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
  <v-col cols="3">
    <div class="sticky-johny sticky top-20">
      <div class="sticky-johny__head">
        <h3>150 000 $</h3>
        <span>from 1500 $/month in mortgage</span>
        <v-list>
          <v-list-item v-for="item in list" :key="item.title" min-height="26">
            <div class="d-flex">
              <h6>{{ item.title }}&nbsp;</h6>
              <span>{{ item.content }}</span>
            </div>
          </v-list-item>
        </v-list>
        <span> Monitor price changes </span>
      </div>
      <div class="sticky-johny__body mt-4">
        <div class="sticky-johny__body_info">
          <div class="flex">
            <img :src="person" class="rounded-circle mr-3" />
            <div>
              <div class="leading-5 mb-1">
                <span>Private person</span>
                <h6>Vladimir Smirnov</h6>
              </div>
              <a class="text-blue font-medium"> 7 advertisements </a>
            </div>
          </div>
          <img class="ma-auto mt-4 mb-2" :src="glorax" alt="" />
          <span class="d-block text-center mb-3">Licence: 474648837373</span>
          <v-btn
            class="primary-gradient text-white rounded-lg w-100"
            height="48"
          >
            <span>Show phone</span>
          </v-btn>

          <v-btn
            class="green-gradient text-white rounded-lg w-100 mt-3"
            height="48"
          >
            <span>Write to Whatsapp</span>
          </v-btn>
        </div>
      </div>
      <div class="sticky-johny__footer mt-4 text-center p-5">
        <v-btn class="bg-gray me-2" icon size="42">
          <IconShare />
        </v-btn>
        <v-btn class="bg-gray me-2" icon size="42">
          <IconPrint />
        </v-btn>
        <v-btn class="bg-gray" icon size="42">
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
      @apply bg-white rounded-10;
    }
    &__head,
    &__body {
      @apply pt-7 pb-9 pl-7 pr-9;
    }

    &__footer {
      @apply p-5;
    }
  }
</style>
