<template>
  <div class="min-h-screen bg-black text-green-400 font-mono p-8">
    <div class="max-w-4xl mx-auto">
      <header class="mb-12 border-b border-green-400 pb-4">
        <h1 class="text-4xl mb-2">~/blog</h1>
        <p class="text-green-500">Personal site &amp; technical musings</p>
      </header>

      <main>
        <div v-if="pending" class="text-green-500">
          Loading...
        </div>

        <div v-else-if="error" class="text-red-400">
          Error loading posts: {{ error.message }}
        </div>

        <div v-else>
          <p class="mb-6 text-green-500">{{ posts?.length || 0 }} post(s) found</p>
          
          <div class="space-y-6">
            <article 
              v-for="post in posts" 
              :key="post._path"
              class="border border-green-400 p-4 hover:bg-green-950 transition-colors"
            >
              <NuxtLink :to="post._path" class="block">
                <h2 class="text-2xl text-green-300 mb-2">
                  > {{ post.title }}
                </h2>
                <p class="text-green-500 mb-3">
                  {{ post.description }}
                </p>
                <div class="flex flex-wrap gap-4 text-sm">
                  <span class="text-green-600">
                    Published: {{ formatDate(post.publishedAt) }}
                  </span>
                  <span v-if="post.updatedAt !== post.publishedAt" class="text-green-600">
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
              </NuxtLink>
            </article>
          </div>
        </div>
      </main>

      <footer class="mt-12 pt-4 border-t border-green-400 text-center text-green-600">
        <p>&copy; {{ new Date().getFullYear() }} ~/blog</p>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: posts, pending, error } = await useFetch('/api/blog');

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
};
</script>
