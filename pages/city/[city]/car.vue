<template>
  <div>
    <!-- CARS PAGE-->

    <div class="flex mt-32">
      <NuxtErrorBoundary>
        <CarSideBar></CarSideBar>
        <NuxtPage></NuxtPage>
        <template #error="{ error }">
          <div class="text-center mx-auto flex flex-col">
            <h1 class="text-5xl text-red-600">Sorry, something went wrong</h1>
            <code>{{ error }}</code>
            <button
              class="mt-5 text-white bg-blue-400"
              @click="error.value = null"
            >
              Go Back
            </button>
          </div>
        </template>
      </NuxtErrorBoundary>
    </div>
    <!-- CARS PAGE-->
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { toTitleCase } = useUtilities();
useHead({
  title: `${
    route.params.make ? toTitleCase(route.params.make) : "Cars"
  } in ${toTitleCase(route.params.city)}`,
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Cars page",
    },
  ],
});

definePageMeta({
  layout: "custom",
});
</script>

<style scoped></style>
