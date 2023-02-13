<template>
  <div class="flex flex-col">
    <button
      @click="handleClick"
      class="flex flex-row justify-between w-48 px-2 py-2 text-gray-700 bg-white border-2 border-white rounded-md shadow focus:outline-none focus:border-blue-600"
    >
      <span class="select-none">none</span>
      <svg
        id="arrow-down"
        class="w-6 h-6 stroke-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <div
      v-show="isVisible"
      id="options"
      class="absolute w-48 py-2 mt-2 bg-white rounded-lg shadow-xl overflow-auto max-h-52"
    >
      <a
        href="#"
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        >None</a
      >
      <a
        v-for="breed in breeds"
        :key="breed.id"
        :breed="breed"
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        >{{ breed.name }}</a
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useBreedStore } from "../stores/counter";
let isVisible = ref(false);
const handleClick = () => {
  isVisible.value = !isVisible.value;
};
const setFilter = () => {
  console.log(this.breed);
};
const store = useBreedStore();
const breeds = store.breedsData;
</script>
