<template>
  <div class="w-full">
    <ClientOnly>
      <CarCard
        v-for="(car, index) in cars"
        :key="car.id"
        :car="car"
        @favor="handleFavorite"
        :favored="car.id in favorite"
      ></CarCard>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const { cars } = useCars();

const favorite = useLocalStorage("favorite", {});

const handleFavorite = (id) => {
  if (id in favorite.value) {
    delete favorite.value[id];
  } else {
    favorite.value = {
      ...favorite.value,
      [id]: true,
    };
  }
};
</script>

<style scoped></style>
