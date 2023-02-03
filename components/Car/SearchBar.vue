<template>
  <div>
    <!-- HOME SEARCH BAR-->
    <div
      class="flex justify-between items-center font-serif w-full mx-auto text-2xl overflow-hidden drop-shadow-2xl"
    >
      <input
        type="text"
        class="w-full py-3 px-5 text-2xl rounded-full focus:outline-none border"
        placeholder="Search by city..."
        :class="cityErorr ? 'border-red-500' : 'border-sky-500'"
        v-model="city"
      />
      <button
        class="bg-sky-500 px-10 text-white absolute top-0 right-0 h-full rounded-full"
        @click="handleSearch"
      >
        Search
      </button>
    </div>
    <!-- HOME SEARCH BAR-->
  </div>
</template>

<script setup lang="ts">
const city = ref("");
const cityErorr = ref(false);

const handleSearch = () => {
  if (!city.value) {
    return (cityErorr.value = true);
  }
  navigateTo(`/city/${city.value}/car`);
};
console.log(city.value);
</script>

<style scoped></style>
