<template>
  <div class="bg-white container mx-auto max-w-4xl max-h-4xl">
    <ul class="flex flex-wrap p-2 justify-center bg-black text-white">
      <li class="p-2">
        <RouterLink to="/">Breed Search</RouterLink>
      </li>
      <li class="p-2">
        <RouterLink to="/favorites">Favorites</RouterLink>
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
        </div>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-8">
      <dogCard v-for="breed in breedsArray" :key="breed.id" :breed="breed" />
    </div>
  </div>
</template>

<script setup>
import dogCard from "../components/dogCard.vue";
import { ref, onMounted, computed } from "vue";
import { RouterLink } from "vue-router";
import { useBreedStore } from "../stores/counter";

let URL = "https://api.thedogapi.com/v1/breeds";
const searchValue = ref("");
let breedsData = ref([]);
let breedsStore = useBreedStore();
let favBreeds = breedsStore.favBreeds.value;

// Fetching API Data
function getBreedsArray() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      breedsData.value = data;
      breedsData.value.forEach((breed) => (breed["isFavorite"] = false));
      breedsStore.breedData.value = data;
      console.log("Data Fetched", breedsData.value);
    })
    .catch((error) => {
      console.error(error);
    });
}
onMounted(() => {
  getBreedsArray();
});

// const favPageTrigger = () => {
//   breedsStore.favBreeds.value = breedsData.value.filter(
//     (breed) => breed["name"] == true
//   );
//   console.log(breedsData.value);
// };
const breedsArray = computed(() =>
  searchValue.value
    ? breedsData.value.filter((breed) =>
        breed.name.toLowerCase().includes(searchValue.value.toLowerCase())
      )
    : breedsData.value
);
let isVisible = ref(false);
</script>
