<template>
  <div>
    <CarCards v-if="cars?.length" :cars="cars"></CarCards>
    <h1 v-else class="text-red-500">No Cars Found With Filters Applied</h1>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: cars, refresh } = await useFetchCars(route.params.city, {
  minPrice: route.query.minPrice,
  maxPrice: route.query.maxPrice,
  make: route.params.make,
});
watch(
  () => route.query,
  () => {
    window.location.reload(true);
  }
);
</script>

<style scoped></style>
