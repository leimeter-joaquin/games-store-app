<template>
  <!-- You could wrap this in a <NuxtLayout /> -->
  <div v-if="error">
    {{ error }}
  </div>
  <button @click="handleReset">Go back</button>
</template>

<script setup>
// this is a serverside error
const error = useError();

const handleReset = () => {
  navigateTo("/");
};
</script>
