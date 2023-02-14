import { defineStore } from "pinia";
import { onBeforeMount, onMounted, ref } from "vue";
let URL = "https://api.thedogapi.com/v1/breeds";

export const useBreedStore = defineStore("breeds", () => {
  let favBreeds = ref([]);
  let breedData = ref([]);
  // function getBreedsArray() {
  //   fetch(URL)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       breedsData.value = data;
  //       console.log("Data Fetched");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  // onBeforeMount(getBreedsArray);
  // onMounted(getBreedsArray);

  return {
    favBreeds,
    breedData,
    // getBreedsArray,
  };
});
