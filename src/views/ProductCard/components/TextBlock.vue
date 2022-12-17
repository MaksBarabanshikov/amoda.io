<script setup>
  import InformationIcon from '@/icons/information/informationIcon.vue';

  const params = [
    {
      title: '260 м',
      sup: '2',
      subtitle: 'total area',
    },
    {
      title: '240 м',
      sup: '2',
      subtitle: 'living space',
    },
    {
      title: '40 м',
      sup: '2',
      subtitle: 'kitchen',
    },
    {
      title: '9',
      subtitle: 'floor',
    },
    {
      title: 'No',
      subtitle: 'elevator',
    },
  ];

  const info = [
    {
      text: 'Children allowed',
      type: 'pram',
    },
    {
      text: 'Pets allowed',
      type: 'pets',
    },
    {
      text: 'Fridge',
      type: 'fridge',
    },
    {
      text: `Room’s furniture`,
      type: 'room-furniture',
    },
    {
      text: 'Television',
      type: 'television',
    },
    {
      text: 'Shower cabin',
      type: 'shower',
    },
    {
      text: 'Dishwasher',
      type: 'dishwasher',
    },
    {
      text: 'Kitchen',
      type: 'kitchen',
    },
    {
      text: 'Wi Fi',
      type: 'wifi',
    },
    {
      text: 'Washing machine',
      type: 'dishwasher',
    },
    {
      text: 'Air conditioner',
      type: 'air-conditioner',
    },
    {
      text: 'Bash',
      type: 'bath',
    },
  ];
</script>

<template>
  <div class="product-card__block py-10 px-12">
    <v-list class="product-params d-flex justify-space-between text-center">
      <v-list-item v-for="param in params" :key="param.subtitle">
        <v-list-item-title
          >{{ param.title }}<sup>{{ param.sup }}</sup></v-list-item-title
        >
        <v-list-item-subtitle>{{ param.subtitle }}</v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </div>
  <div class="product-card__block py-10 px-12">
    <h2 class="product-card__block-title">Ultra luxurious</h2>
    <p class="product-card__block-text">
      Our pet-friendly community offers 2 resort-style swimming pools and a
      fully-equipped, 24-hour fitness center. Located within the highly regarded
      Plano Independent School District, Camden Legacy Creek offers easy access
      to the Dallas North Tollway and is only minutes from Stonebriar and
      Willowbend Malls with direct access to the Bluebonnet Walking Trail.
      Camden residents can take advantage of an exclusive discount with CORT to
      rent furniture and accessories for your apartment home. Pricing and
      availability are subject to change until a quote is saved. Call or visit
      camdenliving.com to save a quote.
    </p>
  </div>
  <div class="product-card__block product-card__info py-10 px-12">
    <h2 class="product-card__block-title">Information</h2>
    <v-list class="grid grid-cols-4">
      <v-list-item
        min-height="25"
        class="text-dark"
        v-for="infoItem in info"
        :key="infoItem.text"
      >
        <template v-slot:prepend>
          <information-icon :type="infoItem.type" />
        </template>
        <v-list-item-title>{{ infoItem.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>
