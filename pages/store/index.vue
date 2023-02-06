<script lang="ts" setup>
import { useMainStore } from '~~/stores/main';

const products = getProducts();
const mainStore = useMainStore();
</script>

<template>
  <!-- Searchbar, use https://vueuse.org/shared/usedebouncefn/#usedebouncefn -->

  <!-- Carousel with offers, show only items with offers, no more than 3, hide when there is a search in place, this is a helpful guide https://blog.logrocket.com/build-image-carousel-from-scratch-vanilla-javascript/ -->

  <!-- Filtered game list, remember to only show this on a search  -->

  <!-- when clicking a product, we should use NuxtLink to go to the route with the correct id, we could use a route middleware (client/server) to check if the provided id exists or not.-->

  <!-- Showing a list for fun -->
  <div class="flex items-center gap-4 p-4">
    <span>{{ mainStore.counter }}</span>
    <button class="bg-blue-200 px-2 py-1" @click="mainStore.counter += 1">
      increment
    </button>
    <button class="bg-blue-200 px-2 py-1" @click="mainStore.reset">
      reset
    </button>
    <span class="text-xl font-semibold">Pinia!</span>
  </div>
  <div>
    <ul class="flex flex-col items-start gap-4 bg-blue-200 p-4">
      <li
        v-for="product in products"
        class="flex min-w-[330px] flex-col gap-1 bg-green-100 p-6"
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
