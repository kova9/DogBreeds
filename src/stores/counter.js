import { defineStore } from "pinia";
import { ref } from "vue";
let URL = "https://api.thedogapi.com/v1/breeds";

export const useBreedStore = defineStore("breeds", () => {
  let favBreeds = ref([]);
  let breedData = ref([]);

  return {
    favBreeds,
    breedData,
  };
});
