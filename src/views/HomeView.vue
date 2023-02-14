<template>
  <div class="bg-[#585879]">
    <div class="md:container md:mx-auto">
      <div>
        <!-- <div class="grid lg:grid-cols-4 md:grid-cols-3 mt-20 gap-10"> -->
        <!-- <dogCard v-for="breed in breeds" :key="breed.id" :breed="breed" /> -->
        <mainLayout />
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, defineComponent, onBeforeMount } from "vue";
import { useBreedStore } from "../stores/counter";
import dogCard from "../components/dogCard.vue";
import filterMenu from "../components/filterMenu.vue";
import mainLayout from "../components/mainLayout.vue";

// let store = useBreedStore();
// let breeds = store.breedsData;
// console.log(breeds);

defineComponent({
  dogCard,
  filterMenu,
});
</script>
