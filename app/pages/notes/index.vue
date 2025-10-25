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
</script>

<template>
  <h1 class="text-2xl text- py-4">Notes</h1>
  <div class="space-y-4">
    <article
      v-for="note in notes"
      :key="note.path"
      class="border border-gray-200 dark:border-gray-800 rounded-lg p-5 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
    >
      <NuxtLink :to="note.path" class="space-y-2">
        <div class="flex items-center justify-between gap-4">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {{ note.title }}
          </h2>

          <time
            :datetime="new Date(note.publishedAt).toISOString()"
            class="text-sm text-gray-500 dark:text-gray-500 whitespace-nowrap"
          >
            {{ formatDate(new Date(note.publishedAt)) }}
          </time>
        </div>

        <p class="text-gray-600 dark:text-gray-400 text-sm">
          {{ note.description }}
        </p>

        <div class="flex flex-wrap gap-2 pt-2">
          <Tag v-for="tag in note.tags" :key="tag" :label="tag" />
        </div>
      </NuxtLink>
    </article>
  </div>
</template>
