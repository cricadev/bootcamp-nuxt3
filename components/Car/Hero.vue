<template>
  <div>
    <div>
      <!-- HOME HERO-->
      <div
        class="relative h-screen w-full bg-no-repeat bg-cover bg-center bg-[url('https://carconfigurator.ferrari.com/assets/cars/purosangue/packages/default/splashpage.jpg')]"
      >
        <div
          class="z-10 absolute w-full h-full flex justify-center items-center"
        >
          <div class="text-center w-1/2">
            <h1 class="text-8xl font-serif mb-10 text-white">
              Find your drive
            </h1>
            <CarSearchBar />
          </div>
        </div>

        <div class="z-1 absolute w-full h-full opacity-50 bg-black"></div>
      </div>

      <!-- HOME HERO-->
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
