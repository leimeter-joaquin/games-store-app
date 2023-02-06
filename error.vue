<template>
  <!-- You could wrap this in a <NuxtLayout /> -->
  <div v-if="error">
    {{ error }}
  </div>
  <button @click="handleReset">Go back</button>
</template>

<script setup>
// this is a serverside error, happens when we access the wrong route from the browser. What happens when we use Nuxt link to go to a wrong detailpage? We should handle that error with another middleware and throw an error to get to this page. Or maybe just show an error component on the detail page.
const error = useError();

const handleReset = () => {
  clearError({ redirect: '/' });
};
</script>
