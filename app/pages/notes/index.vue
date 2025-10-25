<script setup lang="ts">
const { data: posts } = await useAsyncData('notes-list', () =>
  queryCollection('notes').all()
);
</script>

<template>
  <div v-for="post in posts">
    <NuxtLink :to="post.path"> {{ post.title }} </NuxtLink>
  </div>
</template>
