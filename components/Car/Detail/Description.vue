<template>
  <div>
    <!-- ! CAR DESCRIPTION -->
    <div class="mt-5">
      <p class="mb-10">
        {{ description }}
      </p>
    </div>
    <!-- ! CAR DESCRIPTION -->
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  description: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
