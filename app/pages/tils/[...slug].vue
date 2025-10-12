<script setup lang="ts">
const route = useRoute();

const slugSegments = computed(() => {
  const value = route.params.slug;
  if (Array.isArray(value)) {
    return value.filter(Boolean);
  }
  return typeof value === "string" && value.length ? [value] : [];
});

if (!slugSegments.value.length) {
  throw createError({ statusCode: 404, statusMessage: "Blog post not found" });
}

const entryPath = computed(() => `/tils/${slugSegments.value.join("/")}`);

const { data: post } = await useAsyncData(entryPath.value, () =>
  queryCollection("tils").path(entryPath.value).first()
);

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: "Blog post not found" });
}
</script>

<template>
  <div class="prose mt-8">
    <h1>{{ post?.title }}</h1>
    <ContentRenderer v-if="post" :value="post" :prose="false" />
  </div>
</template>
