<script lang="ts" setup>
const route = useRoute();
const product = getProduct(route.params.productId as string);

console.log(route.params);

// using a named and a function middleware
definePageMeta({
  middleware: [
    "test", // this lives on /middlewares/test.ts
    function ({ params }, from) {
      // This runs on the server AND on the client, catching any errors and rendering the error.vue component.
      // We need to get these info again because definePageMeta is a compiler macro that does not have access to the route on line 2.
      const products = getProducts();

      console.log("route.params", params);
      console.log("products", products);

      // You could use this middleware OR use <NuxtErrorBoundary /> on some component.
      // More info https://nuxt.com/docs/api/components/nuxt-error-boundary#nuxterrorboundary

      if (!products.some((product) => product.id === params.productId)) {
        return createError({
          statusCode: 404,
          message: "product not found",
        });
      }

      //TODO: Find a better way to check this, don't call the data 2 times. I probably have to do this, I'd like to call the data on the middleware and use it on the page. Maybe using a Pinia store it's possible.
    },
  ],
});
</script>

<template>
  <!-- we have access to the route param in the template like this -->
  <div>Page: store with product id: {{ $route.params.productId }}</div>

  <pre>{{ product }}</pre>

  <button @click="navigateTo('/store')">Go Back</button>
</template>

<style scoped></style>
