<script setup lang="ts">
const { data: posts } = await useAsyncData("til-list", () =>
  queryCollection("tils").all()
);
</script>

<template>
  <div v-for="post in posts">
    <NuxtLink :to="post.path"> {{ post.title }} </NuxtLink>
  </div>
</template>
