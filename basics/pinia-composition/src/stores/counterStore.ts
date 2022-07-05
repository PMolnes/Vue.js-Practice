import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counterStore', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      setTimeout(() => {
        this.count++;
      }, 2000);
    }
  },
  getters: {
    finalCounter(state) {
      return state.count * 2;
    },
    normalizedCounter() {
      if (this.finalCounter < 0) {
        return 0;
      }
      if (this.finalCounter > 100) {
        return 100;
      }
      return this.finalCounter;
    }
  }
})