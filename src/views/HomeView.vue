<template>
  <div class="bg-[#585879]">
    <div class="md:container md:mx-auto">
      <div>
        <mainLayout />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from "vue";
import dogCard from "../components/dogCard.vue";
import filterMenu from "../components/filterMenu.vue";
import mainLayout from "../components/mainLayout.vue";

defineComponent({
  dogCard,
  filterMenu,
});
</script>
