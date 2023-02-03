<template>
  <div>
    <!-- CAR SIDE BAR-->
    <div class="shadow border w-64 mr-10 z-30 h-[190px]">
      <div class="relative flex justify-between p-5 border-b cursor-pointer">
        <h3>Location</h3>
        <h3 @click="updateModal('location')" class="text-blue-400 capitalize">
          {{ route.params.city }}
        </h3>
        <div
          v-if="modal.location"
          class="absolute p-4 -m-1 bg-white border shadow left-56 top-1"
        >
          <input type="text" class="p-1 border rounded" v-model="city" />
          <button
            class="w-full p-1 mt-2 text-white bg-blue-400 rounded"
            @click="onChangeLocation"
          >
            Apply
          </button>
        </div>
      </div>
      <div class="relative flex justify-between p-5 border-b cursor-pointer">
        <h3>Make</h3>
        <h3 class="text-blue-400 capitalize">Any</h3>
      </div>
      <div class="relative flex justify-between p-5 border-b cursor-pointer">
        <h3>Price</h3>
        <h3 class="text-blue-400 capitalize">Any</h3>
      </div>
    </div>
    <!-- CAR SIDE BAR-->
  </div>
</template>

<script setup lang="ts">
const city = ref("");
const route = useRoute();
const modal = ref({
  make: false,
  location: false,
  price: false,
});
const updateModal = (key) => {
  modal.value[key] = !modal.value[key];
};

const onChangeLocation = () => {
  if (!city.value) return;
  if (!isNaN(parseInt(city.value))) {
    throw createError({
      message: "City name must be a string",
      statusCode: 400,
    });
  }
  updateModal("location");
  navigateTo(`/city/${city.value}/car/${route.params.make}`);
  city.value = "";
};
</script>

<style scoped></style>
