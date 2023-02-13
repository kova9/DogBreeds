<template>
  <div class="bg-white md:container md:mx-auto w-10">
    <ul class="flex flex-wrap p-2 justify-center bg-black text-white">
      <li class="p-2">
        <a href=""> Filter </a>
      </li>
      <li class="p-2">
        <a href=""> Search </a>
      </li>
    </ul>
    <!-- filter -->
    <div class="flex flex-wrap justify-center h-52 content-center">
      <!-- <filterMenu />
      <filterMenu />
      <filterMenu /> -->
      <searchBox v-model="search" />
    </div>
    <div class="grid lg:grid-cols-4 md:grid-cols-3 gap-8">
      <dogCard v-for="breed in breeds" :key="breed.id" :breed="breed" />
    </div>
  </div>
</template>

<script setup>
import { useBreedStore } from "../stores/counter";
import dogCard from "../components/dogCard.vue";
import filterMenu from "../components/filterMenu.vue";
import navbar from "./navbar.vue";
import { ref, computed } from "vue";

import searchBox from "./searchBox.vue";

let search = ref(null);
let store = useBreedStore();

let breeds = ref(store.breedsData);

let isVisible = ref(false);
</script>
