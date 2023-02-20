import { defineStore } from "pinia";
import { ref } from "vue";

export const useBreedStore = defineStore("breeds", () => {
  let favBreeds = ref([]);
  let breedData = ref([]);

  return {
    favBreeds,
    breedData,
  };
});
