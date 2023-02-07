<template>
  <div>
    <div class="mt-10">
      <nuxt-img :src="car.url" alt="" class="" />
      <h1 class="mt-10 text-4l">{{ car.name }}</h1>
      <div
        class="flex justify-between pb-5 mt-3 text-lg border-b text-slate-500"
      >
        <div class="flex">
          <p class="mr-2">{{ car.seats }}</p>
          <p class="mr-2">|</p>
          <p class="mr-2">{{ car.miles }}</p>
        </div>
        <h2 class="">$ {{ car.price }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  car: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
