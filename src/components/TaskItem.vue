<script setup>
import { defineProps } from "vue";

defineProps({
  title: String,
  body: String,
  dataTime: String,
  type: String,
  userId: Number,
});
</script>

<template>
  <div class="container">
    <div>
      title: {{ type || "Общий" }} - {{ dataTime || "Без даты" }} -
      {{ title }}
    </div>
    <div>body: {{ body }}</div>
    <div v-if="!!userId">userId: {{ userId }}</div>
  </div>
</template>

<style scoped>
.container {
  padding: 5px;
  border: 1px solid black;
  border-radius: 7px;
  margin-bottom: 10px;
}
</style>
