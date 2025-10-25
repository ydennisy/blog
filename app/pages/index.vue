<script setup lang="ts">
const { data: recentNotes } = await useAsyncData('recent-notes', () =>
  queryCollection('notes').order('publishedAt', 'DESC').limit(5).all()
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
  <div class="space-y-8">
    <Hero />
    <USeparator />
    <section class="space-y-8">
      <div class="flex items-center justify-between">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Recent Notes
        </h2>

        <NuxtLink
          to="/notes"
          class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          View all notes →
        </NuxtLink>
      </div>

      <div class="space-y-2 pb-4">
        <article v-for="post in recentNotes" :key="post.path" class="">
          <NuxtLink :to="post.path" class="space-y-1">
            <div class="flex items-center justify-between gap-4">
              <h3
                class="text-xl font-semibold text-gray-900 dark:text-gray-100"
              >
                {{ post.title }}
              </h3>

              <time
                :datetime="new Date(post.publishedAt).toISOString()"
                class="text-sm text-gray-500 dark:text-gray-500 whitespace-nowrap"
              >
                {{ formatDate(new Date(post.publishedAt)) }}
              </time>
            </div>

            <p class="text-gray-600 dark:text-gray-400 text-sm">
              {{ post.description }}
            </p>

            <div class="flex flex-wrap gap-2 pt-2">
              <Tag v-for="tag in post.tags" :key="tag" :label="tag" />
            </div>
          </NuxtLink>
        </article>
      </div>
    </section>
  </div>
</template>
