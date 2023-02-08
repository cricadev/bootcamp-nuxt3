<template>
  <div>
    <header
      class="sticky top-0 z-50 flex items-center justify-between p-4 space-x-1 bg-white border-b shadow-md"
    >
      <nuxt-link to="/" class="font-mono text-3xl">cartrader</nuxt-link>

      <div class="" v-if="user">
        <nuxt-link to="/profile/listings" class="text-blue-400 mr-5"
          >My profile</nuxt-link
        >
        <button @click="logout" class="text-blue-400">Log out</button>
      </div>
      <nuxt-link v-else to="/login" class="">Login</nuxt-link>
    </header>
  </div>
</template>

<script setup lang="ts">
const demoButton = () => {
  console.log("demo button clicked");
};
const user = useSupabaseUser();
const supabase = useSupabaseClient();
const logout = async () => {
  // 1) make user.value = null
  // 2) remove JWT from cookie browser
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
  }
  // 3) Navigate to homepage
  navigateTo("/");
  /* manual way
  
  try {
    await $fetch("/api/_supabase/session", {
      method: "POST",
      body: {
        event: "SIGNED_OUT",
        session: null,
      },
    });
  } catch (error) {
    console.log(error);
  }
  */
};
</script>

<style scoped></style>
