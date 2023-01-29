<script lang="ts" setup>
const products = getProducts();
</script>

<template>
  <!-- Searchbar, use https://vueuse.org/shared/usedebouncefn/#usedebouncefn -->

  <!-- Carousel with offers, show only items with offers, no more than 3, hide when there is a search in place, this is a helpful guide https://blog.logrocket.com/build-image-carousel-from-scratch-vanilla-javascript/ -->

  <!-- Filtered game list, remember to only show this on a search  -->

  <!-- when clicking a product, we should use NuxtLink to go to the route with the correct id, we could use a route middleware (client/server) to check if the provided id exists or not.-->

  <pre class="test-xs">{{ products }}</pre>
</template>

<style scoped></style>
