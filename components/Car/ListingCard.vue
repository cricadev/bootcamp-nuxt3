<template>
  <div class="shadow rounded overflow-hidden flex justify-between mb-4">
    <div class="flex">
      <img
        :src="`${config.public.supabase.url}/storage/v1/object/public/images/${listing.image}`"
        alt=""
        class="w-80 mr-3 h-44"
      />
      <div class="p-3">
        <h1 class="text-2xl">{{ listing.name }}</h1>
        <p class="text-blue-400">{{ listing.price }}</p>
      </div>
    </div>
    <div class="p-3 flex">
      <nuxt-link
        class="text-blue-400 mr-5"
        :to="`/profile/listings/view/${listing.id}`"
        >View</nuxt-link
      >
      <p @click="emits('deleteClick')" class="text-red-400 cursor-pointer">
        Delete
      </p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});
const props = defineProps({
  listing: {
    type: Object,
    required: true,
  },
});

const emits = defineEmits(["deleteClick"]);

const config = useRuntimeConfig();
</script>
