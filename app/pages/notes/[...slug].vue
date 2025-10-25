<script setup lang="ts">
const route = useRoute();

const slugSegments = computed(() => {
  const value = route.params.slug;
  if (Array.isArray(value)) {
    return value.filter(Boolean);
  }
  return typeof value === 'string' && value.length ? [value] : [];
});

if (!slugSegments.value.length) {
  throw createError({ statusCode: 404, statusMessage: 'Blog post not found' });
}

const entryPath = computed(() => `/notes/${slugSegments.value.join('/')}`);

const { data: post } = await useAsyncData(entryPath.value, () =>
  queryCollection('notes').path(entryPath.value).first()
);

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Blog post not found' });
}
</script>

<template>
  <div class="prose dark:prose-invert mt-8">
    <h1>{{ post?.title }}</h1>
    <div class="flex flex-wrap gap-2 pt-2">
      <Tag v-for="tag in post?.tags" :key="tag" :label="tag" />
    </div>
    <ContentRenderer v-if="post" :value="post" :prose="false" />
  </div>
</template>
