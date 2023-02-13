import { defineStore } from "pinia";
import { ref } from "vue";
let URL = "https://api.thedogapi.com/v1/breeds";

export const useBreedStore = defineStore("Breeds", {
  state: () => ({ breedsData: [] }),
  actions: {
    async getBreedsArray() {
      try {
        const response = await fetch("https://api.thedogapi.com/v1/breeds");
        const data = await response.json();
        // this.breedsData = data;
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
