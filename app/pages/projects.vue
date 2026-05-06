<script setup lang="ts">
const seoTitle = 'Projects – Dennis Yurkevich';
const seoDescription =
  'A collection of the products and experiments Dennis Yurkevich is building.';
useSeoMeta({
  title: seoTitle,
  ogTitle: seoTitle,
  description: seoDescription,
  ogDescription: seoDescription,
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <div class="space-y-8">
    <Heading>Projects</Heading>

    <section class="space-y-4 pb-8">
      <article
        class="space-y-4 border border-gray-200 dark:border-gray-800 rounded-lg p-5"
      >
        <div class="space-y-2">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Cardaroo
            </h2>

            <div class="flex flex-wrap gap-2">
              <Tag label="TypeScript" />
              <Tag label="AI" />
              <Tag label="Content" />
            </div>
          </div>

          <p class="text-gray-600 dark:text-gray-400">
            A fun experiment in automated content generation for greeting
            cards. The idea was to generate blog posts and sharing flows which
            could drive traffic to the site.
          </p>
        </div>

        <p class="text-sm text-gray-600 dark:text-gray-400">
          The main lesson: driving traffic in a hot space is very hard. Still,
          friends and family send me these cards, which makes it worth it.
        </p>

        <div class="flex flex-wrap gap-4 text-sm font-medium">
          <NuxtLink
            to="https://cardaroo.shop"
            target="_blank"
            class="text-gray-900 dark:text-gray-100 hover:text-primary transition-colors"
          >
            Visit site →
          </NuxtLink>
          <NuxtLink
            to="https://github.com/ydennisy/cardaroo"
            target="_blank"
            class="text-gray-900 dark:text-gray-100 hover:text-primary transition-colors"
          >
            View source →
          </NuxtLink>
        </div>
      </article>
    </section>
  </div>
</template>
