<template>
  <base-container title="Pinia">
    <TheCounter></TheCounter>
    <FavoriteValue></FavoriteValue>
    <button @click="store.increment">Add 1</button>
  </base-container>
</template>

<script setup lang="ts">
import BaseContainer from './components/BaseContainer.vue';
import { useCounterStore } from '@/stores/counterStore';
import TheCounter from './components/TheCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';

const store = useCounterStore();
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>