<template>
  <div>
    <!-- CAR CARD-->

    <div
      class="shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]"
      @click="navigateTo(`/car/${car.name}-${car.id}`)"
    >
      <div class="flex h-full">
        <img :src="car.url" alt="" />
        <div class="flex flex-col p-4">
          <div class="">
            <h1 class="text-2xl text-blue-700">{{ car.name }}</h1>
            <p class="text-gray-700">
              {{ car.description }}
            </p>
          </div>
          <h1 class="mt-auto">$ {{ car.price }}</h1>
        </div>
      </div>
    </div>
    <!-- CAR CARD-->
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
