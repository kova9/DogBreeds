<template>
  <div class="h-screen w-auto bg-zinc-600 flex items-center justify-center">
    <div
      class="bg-stone-100 container h-4/5 max-w-4xl rounded-md max-h-4xl overflow-auto no-scrollbar"
    >
      <ul
        class="flex flex-wrap p-2 justify-center bg-gray-900 rounded-t-md text-white"
      >
        <li class="p-2">
          <RouterLink to="/">Breed Search</RouterLink>
        </li>
        <li class="p-2">
          <RouterLink to="/favorites">Favorites</RouterLink>
        </li>
      </ul>
      <div>
        <favoriteBreeds />
      </div>
    </div>
  </div>
</template>

<script setup>
import favoriteBreeds from "../components/favoriteBreeds.vue";
import { RouterLink } from "vue-router";
</script>
