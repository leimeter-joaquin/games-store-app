export default defineNuxtRouteMiddleware((to, from) => {
  // Note how this middleware runs on the server AND on the client when we reload the page or change the URL directly. Not when we use NuxtLink because with Nuxt link the app behaves like an SPA
  // console.log("Global Route middleware", { to, from });
  console.log("this middleware executes on every route change");
});
