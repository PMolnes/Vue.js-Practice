<template>
  <h3>{{ store.normalizedCounter }}</h3>
  <p>We do more...</p> 
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counterStore';

const store = useCounterStore();
</script>