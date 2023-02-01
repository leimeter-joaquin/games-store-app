<script lang="ts" setup>
const products = getProducts();
</script>

<template>
  <!-- Searchbar, use https://vueuse.org/shared/usedebouncefn/#usedebouncefn -->

  <!-- Carousel with offers, show only items with offers, no more than 3, hide when there is a search in place, this is a helpful guide https://blog.logrocket.com/build-image-carousel-from-scratch-vanilla-javascript/ -->

  <!-- Filtered game list, remember to only show this on a search  -->

  <!-- when clicking a product, we should use NuxtLink to go to the route with the correct id, we could use a route middleware (client/server) to check if the provided id exists or not.-->

  <!-- Showing a list for fun -->
  <div>
    <ul class="bg-blue-200 flex flex-col gap-4 items-start p-4">
      <li
        v-for="product in products"
        class="bg-green-100 p-6 flex flex-col gap-1 min-w-[330px]"
      >
        <NuxtLink :to="`/store/${product.id}`">
          <article>
            <h2 class="text-xl font-bold">{{ product.title }}</h2>
            <p>{{ product.discoutPercentage }}</p>
            <img
              :url="product.images[0].previewUrl"
              :alt="product.images[0].alt"
            />
            <pre>{{ product.id }}</pre>
          </article>
        </NuxtLink>
      </li>
    </ul>
  </div>

  <pre class="test-xs">{{ products }}</pre>
</template>

<style scoped></style>
