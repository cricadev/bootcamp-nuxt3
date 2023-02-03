<template>
  <div class="w-full">
    <CarCard v-for="(car, index) in cars" :key="car.id" :car="car"></CarCard>
  </div>
</template>

<script setup lang="ts">
const { cars } = useCars();
</script>

<style scoped></style>
