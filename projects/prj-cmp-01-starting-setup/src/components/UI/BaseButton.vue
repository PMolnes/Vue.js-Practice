<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['type', 'mode']
}
</script>

<style scoped>
  button {
    padding: 0.75rem 1.5rem;
    font-family: inherit;
    background-color: #3a0061;
    border: 1px solid #3a0061;
    color: white;
    cursor: pointer;
  }
  
  button:hover,
  button:active {
    background-color: #270041;
    border-color: #270041;
  }

  .flat {
    background-color: transparent;
    color: #3a0061;
    border: none;
  }

  .flat:hover,
  .flat:active {
    background-color: #edd2ff;
  }

  /* button {
    font-size: 20px;
    padding: 10px 20px;
    background-color: #640032;
    border-radius: 15px;
    border: 0px;
    color: white;
  }

  button:hover,
  button:active {
    background-color: #8f0148;
    transform: scale(1.04);
  } */
</style>