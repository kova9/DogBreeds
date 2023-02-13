<script setup>
import { RouterLink, RouterView } from "vue-router";
import navbarVue from "./components/navbar.vue";
import HomeView from "./views/HomeView.vue";
import { useBreedStore } from "./stores/counter";
import { onMounted, onBeforeMount } from "vue";

const store = useBreedStore();
onBeforeMount(async () => {
  store.breedsData = await store.getBreedsArray();
});
onMounted(() => {
  console.log(store.breedsData);
});
</script>

<template>
  <!-- <div class="bg-[#585879]">
    <navbarVue />
  </div> -->
  <div></div>
  <RouterView />
</template>

<style scoped></style>
