<template>
  <ul class="list">
    <li v-for="(item, ind) in list" :key="ind">{{ item }}</li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const someObj = ref([]);
const list = ref([1, 2, 3, 4, 5]);
console.log(someObj.value.length === 0);
</script>

<style lang="scss" scoped></style>
