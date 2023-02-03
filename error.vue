<template>
  <div class="flex h-screen justify-center items-center flex-col">
    <h1 class="text-9xl">{{ error.statusCode }}</h1>
    <p class="mt-7 text-4xl">{{ error.message }}</p>
    <NuxtLink
      to="/"
      class="rounded mt-7 text-2xl bg-blue-400 px-7 py-4 text-white"
      >Go Back</NuxtLink
    >
  </div>
</template>
<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect: "/",
  });
};
</script>
