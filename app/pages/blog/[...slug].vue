<template>
  <div class="min-h-screen bg-black text-green-400 font-mono p-8">
    <div class="max-w-4xl mx-auto">
      <header class="mb-8">
        <NuxtLink 
          to="/" 
          class="text-green-500 hover:text-green-300 mb-4 inline-block"
        >
          &lt; Back to blog list
        </NuxtLink>
      </header>

      <main v-if="post">
        <article class="border border-green-400 p-6">
          <header class="mb-6 pb-4 border-b border-green-400">
            <h1 class="text-3xl text-green-300 mb-3">
              {{ post.title }}
            </h1>
            <p class="text-green-500 mb-4">
              {{ post.description }}
            </p>
            <div class="flex flex-wrap gap-4 text-sm text-green-600">
              <span>Published: {{ formatDate(post.publishedAt) }}</span>
              <span v-if="post.updatedAt !== post.publishedAt">
                Updated: {{ formatDate(post.updatedAt) }}
              </span>
            </div>
            <div v-if="post.tags" class="mt-3 flex flex-wrap gap-2">
              <span 
                v-for="tag in post.tags" 
                :key="tag"
                class="text-xs border border-green-600 px-2 py-1"
              >
                #{{ tag }}
              </span>
            </div>
          </header>

          <div class="prose prose-invert prose-green max-w-none content">
            <div v-html="post.body?.html"></div>
          </div>
        </article>
      </main>

      <footer class="mt-12 pt-4 border-t border-green-400 text-center text-green-600">
        <NuxtLink to="/" class="hover:text-green-400">
          &lt; Return to blog list
        </NuxtLink>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug[0] || '';

const { data: post } = await useFetch(`/api/blog/${slug}`);

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
};
</script>

