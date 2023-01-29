export default defineNuxtRouteMiddleware((to, from) => {
  console.log("Global Route middleware", { to, from });
  console.log("this middleware executes on every route change");
});
