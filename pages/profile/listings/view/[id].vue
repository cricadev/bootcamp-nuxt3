<template>
  <div class="rounded shadow mt-28">
    <CarMessageCard
      v-for="message in messages"
      :key="message.id"
      :message="message"
    ></CarMessageCard>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});

const route = useRoute();

const { data: messages } = useFetch(
  `/api/car/listings/${route.params.id}/message`
);
</script>
