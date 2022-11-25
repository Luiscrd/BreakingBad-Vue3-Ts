<script setup lang="ts">
import { ref } from 'vue';

const counter = ref(0);

</script>

<template>
  <div class="wrapper">
    <h1>Counter</h1>
    <p>{{ counter }}</p>
    <button
      type="button"
      class="btn btn-success"
      @click="counter++"
      >+1</button>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
