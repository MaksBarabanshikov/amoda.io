<script setup>
  const colors = [
    'indigo',
    'warning',
    'pink darken-2',
    'red lighten-1',
    'deep-purple accent-4',
  ];
  const slides = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
</script>
<template>
  <section class="product-card">
    <div class="product-card__title">
      <h1 class="mb-2">
        Ultra luxurious 4+1 in beyzade residences, the favorite of the city,
        from garanti̇ grup
      </h1>
      <span>Antalya, Alanya, Avsallar</span>
      <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows="hover"
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-h2">{{ slide }} Slide</div>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
  </section>
</template>

<style lang="scss">
  .product-card {
    &__title {
      h1 {
        font-size: 28px;
        font-weight: 500;
      }
    }
  }
</style>
