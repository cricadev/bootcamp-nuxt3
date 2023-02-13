<template>
  <div>
    <div class="flex justify-between mt-24 items-center">
      <h1 class="text-6xl">My listings</h1>
      <nuxt-link
        to="/profile/listings/create"
        class="w-9 h-9 bg-blue-400 justify-center items-center rounded-full text-white font-bold cursor-pointer flex"
        >+</nuxt-link
      >
    </div>
    <div class="shadow rounded p-3 mt-5">
      <CarListingCard
        v-for="listing in listings"
        :key="listing.id"
        :listing="listing"
        @deleteClick="handleDeleteClick"
      ></CarListingCard>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});
const user = useSupabaseUser();

const { data: listings, refresh } = await useFetch(
  `/api/car/listings/user/${user.value.id}`
);
console.log(listings);
const handleDeleteClick = async (id) => {
  await $fetch(`/api/car/listings/${id}`, {
    method: "delete",
  });
  listings.value = listings.value.filter((listing) => listing.id !== id);
};
</script>
