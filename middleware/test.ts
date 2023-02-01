export default defineNuxtRouteMiddleware((to, from) => {
  // console.log("Route middleware", { to, from });
  console.log("this middleware only executes when we go to a product page");
});
