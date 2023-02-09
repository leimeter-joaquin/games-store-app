<script lang="ts" setup>
useHead({
  title: 'My Index',
  meta: [{ name: 'description', content: 'My amazing site.' }],
});
</script>

<template>
  <div>
    <div>Page: index</div>
    <button @click="navigateTo('/store')">Go to store</button>
  </div>
</template>

<style scoped></style>
