<template>
  <div v-if="car">
    {{ car }}
    <!-- ? CAR DETAIL PAGE-->
    <CarDetailHero :car="car"></CarDetailHero>
    <CarDetailAttrs :features="car.features"></CarDetailAttrs>
    <CarDetailDescription :description="car.description"></CarDetailDescription>
    <CarDetailContact></CarDetailContact>

    <!-- ? CAR DETAIL PAGE-->
  </div>
</template>

<script setup lang="ts">
const { cars } = useCars();
const { toTitleCase } = useUtilities();
const route = useRoute();

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

const car = computed(() => {
  return cars.find((car) => car.id === parseInt(route.params.id));
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
