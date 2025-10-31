<script setup lang="ts">
const { data: notes } = await useAsyncData('notes-list', () =>
  queryCollection('notes').order('publishedAt', 'DESC').all()
);

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
};

const seoTitle = 'Notes – Dennis Yurkevich';
const seoDescription =
  'Browse the latest notes from Dennis Yurkevich covering software engineering, startups, and building products.';
useSeoMeta({
  title: seoTitle,
  ogTitle: seoTitle,
  description: seoDescription,
  ogDescription: seoDescription,
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <Heading>Notes</Heading>
  <div class="space-y-4">
    <article v-for="note in notes" :key="note.path" class="group">
      <NuxtLink :to="note.path" class="space-y-1">
        <div class="flex items-center justify-between gap-4">
          <h2
            class="text-xl font-semibold text-foreground transition-colors group-hover:text-primary"
          >
            {{ note.title }}
          </h2>

          <time
            :datetime="new Date(note.publishedAt).toISOString()"
            class="text-sm text-muted whitespace-nowrap"
          >
            {{ formatDate(new Date(note.publishedAt)) }}
          </time>
        </div>

        <p class="text-muted-foreground text-sm">
          {{ note.description }}
        </p>

        <div class="flex flex-wrap gap-2 pt-2">
          <Tag v-for="tag in note.tags" :key="tag" :label="tag" />
        </div>
      </NuxtLink>
    </article>
  </div>
</template>
