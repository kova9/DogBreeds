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

    <div class="flex flex-wrap justify-center h-52 content-center">
      <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
          <label
            for="exampleSearch2"
            class="form-label inline-block mb-2 text-gray-700"
            >Search</label
          >
          <input
            v-model="searchValue"
            type="search"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleSearch2"
            placeholder="Type query"
          />
          <div class="flex flex-wrap">
            <div>Test: {{ searchValue }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid lg:grid-cols-4 md:grid-cols-3 gap-8">
      <dogCard v-for="breed in breedsArray" :key="breed.id" :breed="breed" />
    </div>
  </div>
</template>

<script setup>
import dogCard from "../components/dogCard.vue";
import { ref, onMounted, computed } from "vue";
import searchBox from "./searchBox.vue";

let URL = "https://api.thedogapi.com/v1/breeds";
const searchValue = ref("");
let breedsData = ref([]);

// Fetching API Data
function getBreedsArray() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      breedsData.value = data;
      console.log("Data Fetched", breedsData.value);
    })
    .catch((error) => {
      console.error(error);
    });
}
onMounted(() => {
  getBreedsArray();
});

const breedsArray = computed({
  get() {
    return breedsData.value;
  },
  set(val) {
    breedsData.value = breedsData.value.filter((breed) => breed.name == search);
  },
});
let isVisible = ref(false);
</script>
