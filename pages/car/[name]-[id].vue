<template>
  <div v-if="car">
    <!-- ? CAR DETAIL PAGE-->

    <CarDetailHero :car="car"></CarDetailHero>
    <CarDetailAttrs :features="car.features"></CarDetailAttrs>
    <CarDetailDescription :description="car.description"></CarDetailDescription>
    <CarDetailContact></CarDetailContact>

    <!-- ? CAR DETAIL PAGE-->
  </div>
</template>

<script setup lang="ts">
const { toTitleCase } = useUtilities();
const route = useRoute();
const user = useSupabaseUser();
const { data: car } = await useFetchCar(route.params.id);

useHead({
  title: `${toTitleCase(route.params.name)}`,
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Car detail page",
    },
  ],
});

if (!car.value) {
  throw createError({
    statusCode: 404,
    message: `car with id ${route.params.id} not found`,
  });
}
definePageMeta({
  layout: "custom",
});
</script>

<style scoped></style>
