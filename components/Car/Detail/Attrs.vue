<template>
  <div>
    <div class="pb-5 mt-5 mr-10 border-b">
      <div
        class="flex mt-2 text-lg"
        v-for="(feature, index) in features"
        :key="index"
      >
        <p class="mr-3 rounded text-lime-800">✔️</p>
        <p>
          {{ feature }}
        </p>
      </div>
    </div>
    <!-- ! CAR ATTRIBUTES -->
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  features: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped></style>
