<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg bg-lime-50">
    <img
      class="w-full max-h-48 object-top object-cover"
      alt="Sunset in the mountains"
      v-bind:src="breed.image.url"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ breed.name }}</div>
      <p class="text-gray-700 text-base">
        {{ breed.temperament }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useBreedStore } from "../stores/counter";

let props = defineProps({
  breed: Object,
});
</script>
