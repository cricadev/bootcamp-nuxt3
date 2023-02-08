<template>
  <div>
    <!-- CAR CARD-->

    <div
      class="relative shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]"
    >
      <img
        :src="favored ? heartFilled : heartOutline"
        class="absolute w-7 right-5 top-2 z-20"
        alt=""
        @click="emit('favor', car.id)"
      />
      <div
        class="flex h-full"
        @click="navigateTo(`/car/${car.name}-${car.id}`)"
      >
        <nuxt-img :src="car.url" alt="" />
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
import heartFilled from "@/assets/heartFilled.png";
import heartOutline from "@/assets/heartOutline.png";
console.log(heartFilled);
const props = defineProps({
  car: {
    type: Object,
    required: true,
  },
  favored: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(["favor"]);

/* ! this does not works anymore since we change the way we handle the favorite cars const favored = useState(`favored-${props.car.id}`, () => {
  return false;
});*/
</script>
y
<style scoped></style>
