<template>
  <div class="bg-[#585879]">
    <div class="md:container md:mx-auto lg:mx-auto max-w-min">
      <div>
        <mainLayout />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from "vue";
import dogCard from "../components/dogCard.vue";
import mainLayout from "../components/mainLayout.vue";

defineComponent({
  dogCard,
});
</script>
