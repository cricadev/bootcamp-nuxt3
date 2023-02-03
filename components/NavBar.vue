<template>
  <div>
    <header
      class="sticky top-0 z-50 flex items-center justify-between p-4 space-x-1 bg-white border-b shadow-md"
    >
      <nuxt-link to="/" class="font-mono text-3xl">cartrader</nuxt-link>
    </header>
  </div>
</template>

<script setup lang="ts">
const demoButton = () => {
  console.log("demo button clicked");
};
</script>

<style scoped></style>
