<template>
  <h3>{{ store.count }}</h3>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counterStore';

const store = useCounterStore();
</script>