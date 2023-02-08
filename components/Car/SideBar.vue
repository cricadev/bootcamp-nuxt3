<template>
  <div>
    <!-- CAR SIDE BAR-->
    <div class="shadow border w-64 mr-10 z-30 h-[190px]">
      <!--LOCATION START-->
      <div class="relative flex justify-between p-5 border-b cursor-pointer">
        <h3>Location</h3>
        <h3 @click="updateModal('location')" class="text-blue-400 capitalize">
          {{ route.params.city }}
        </h3>
        <div
          v-if="modal.location"
          class="absolute p-4 -m-1 bg-white border shadow left-56 top-1 z-10"
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
      <!--LOCATION END-->

      <!--MAKE START-->
      <div class="relative flex justify-between p-5 border-b cursor-pointer">
        <h3>Make</h3>
        <h3 class="text-blue-400 capitalize" @click="updateModal('make')">
          {{ route.params.make || "Any" }}
        </h3>
        <div
          v-if="modal.make"
          class="absolute border shadow left-56 p-5 top-1 flex-justify-between flex-wrap bg-white -m-1 w-[600px] z-10"
        >
          <h4
            v-for="make in makes"
            :key="make"
            class="w-1/3"
            @click="onChangeMake(make)"
          >
            {{ make }}
          </h4>
        </div>
      </div>
      <!--MAKE END-->

      <!--PRICE START-->
      <div class="relative flex justify-between p-5 border-b cursor-pointer">
        <h3>Price</h3>
        <h3 class="text-blue-400 capitalize" @click="updateModal('price')">
          {{ priceRangeText }}
        </h3>
        <div
          class="absolute border shadow left-65 p-5 top-1 bg-white -m-1"
          v-if="modal.price"
        >
          <input
            class="border p-1 rounded"
            type="number"
            placeholder="Min"
            v-model="priceRange.min"
          />
          <input
            class="border p-1 rounded"
            type="number"
            placeholder="Max"
            v-model="priceRange.max"
          />
          <button
            class="w-full p-1 mt-2 text-white bg-blue-400 rounded"
            @click="onChangePrice"
          >
            Apply
          </button>
        </div>
      </div>
      <!--PRICE END-->
    </div>
    <!-- CAR SIDE BAR-->
  </div>
</template>

<script setup lang="ts">
const { makes } = useCars();
const city = ref("");
const priceRange = ref({
  min: 0,
  max: 100000,
});

const priceRangeText = computed(() => {
  const minPrice = route.query.minPrice;
  const maxPrice = route.query.maxPrice;

  if (!minPrice && !maxPrice) return "Any";
  else if (!minPrice && maxPrice) {
    return `< $${maxPrice}`;
  } else if (minPrice && !maxPrice) {
    return `> $${minPrice}`;
  } else {
    return `$${minPrice} - $${maxPrice}`;
  }
});
const route = useRoute();
const router = useRouter();
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

const onChangeMake = (make) => {
  updateModal("make");
  navigateTo(`/city/${route.params.city}/car/${make}`);
};
const onChangePrice = () => {
  updateModal("price");
  if (priceRange.value.max && priceRange.value.min) {
    if (priceRange.value.min > priceRange.value.max) return;
  }

  router.push({
    query: {
      ...route.query,
      minPrice: priceRange.value.min,
      maxPrice: priceRange.value.max,
    },
  });
};
</script>

<style scoped></style>
