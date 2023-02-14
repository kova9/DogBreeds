<script setup>
import { RouterView } from "vue-router";
import { useBreedStore } from "./stores/counter";

const store = useBreedStore();
</script>

<template>
  <div></div>
  <RouterView />
</template>

<style scoped></style>
