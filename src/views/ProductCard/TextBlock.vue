<script setup>
  const params = [
    {
      title: '260 м2',
      subtitle: 'total area',
    },
    {
      title: '240 м2',
      subtitle: 'living space',
    },
    {
      title: '40 м2',
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
    },
    {
      text: 'Pets allowed',
    },
    {
      text: 'Fridge',
    },
    {
      text: `Room’s furniture`,
    },
    {
      text: 'Television',
    },
    {
      text: 'Shower cabin',
    },
    {
      text: 'Dishwasher',
    },
    {
      text: 'Kitchen',
    },
    {
      text: 'Wi Fi',
    },
    {
      text: 'Washing machine',
    },
    {
      text: 'Air conditioner',
    },
    {
      text: 'Bash',
    },
  ];
</script>

<template>
  <div class="product-card__block py-10 px-12">
    <v-list class="product-params d-flex justify-space-between text-center">
      <v-list-item
        v-for="param in params"
        :key="param.subtitle"
        :title="param.title"
        :subtitle="param.subtitle"
      />
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
        :title="infoItem.text"
      />
    </v-list>
  </div>
</template>
