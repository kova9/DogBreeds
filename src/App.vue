<script setup>
import { RouterLink, RouterView } from "vue-router";
import navbarVue from "./components/navbar.vue";
import HomeView from "./views/HomeView.vue";
import { useBreedStore } from "./stores/counter";
import { onMounted, onBeforeMount } from "vue";

const store = useBreedStore();
</script>

<template>
  <div></div>
  <RouterView />
</template>

<style scoped></style>
