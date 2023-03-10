<script lang="ts" setup>
import { useStorage } from '@vueuse/core';
import { Product } from '~~/types/product';

const route = useRoute();
const product = getProduct(route.params.productId as string);

const loading = ref(true);

const cart = useStorage<Product[]>('cart', []);

const addToCart = () => {
  product && cart.value?.push(product);
};

console.log(route.params);

useHead({
  title: product?.title,
});

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
});

// using a named and a function middleware
definePageMeta({
  middleware: [
    'test', // this lives on /middlewares/test.ts
    function ({ params }, from) {
      // This runs on the server AND on the client, catching any errors and rendering the error.vue component.
      // We need to get these info again because definePageMeta is a compiler macro that does not have access to the route on line 2.
      const products = getProducts();

      console.log('route.params', params);
      console.log('products', products);

      // You could use this middleware OR use <NuxtErrorBoundary /> on some component.
      // More info https://nuxt.com/docs/api/components/nuxt-error-boundary#nuxterrorboundary

      if (!products.some((product) => product.id === params.productId)) {
        return createError({
          statusCode: 404,
          message: 'product not found',
        });
      }

      //TODO: Find a better way to check this, don't call the data 2 times. I probably have to do this, I'd like to call the data on the middleware and use it on the page. Maybe using a Pinia store it's possible.
    },
  ],
});

const asd = [
  {
    id: '1',
    title: 'Dota 2',
    releaseDate: '2013-07-09T03:00:00.000Z',
    price: 0,
    discountPercentage: 0,
    images: [{ url: 'asd', previewUrl: '', alt: 'asd' }],
  },
  {
    id: '3',
    title: 'Red Dead Redemption 2',
    releaseDate: '2018-10-26T03:00:00.000Z',
    price: 60,
    discountPercentage: 0,
    images: [{ url: 'asd', previewUrl: '', alt: 'asd' }],
  },
];
</script>

<template>
  <div>
    <SkeletonProduct v-if="loading" />
    <div v-else>
      <div>Page: store with product id: {{ $route.params.productId }}</div>
      <pre>{{ product }}</pre>
    </div>
    <div class="flex gap-4 p-8">
      <button @click="navigateTo('/store')">Go Back</button>
      <button @click="addToCart">Add</button>
      <button @click="cart = []">Clear cart</button>
    </div>
  </div>
</template>

<style scoped></style>
