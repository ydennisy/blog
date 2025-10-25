<script setup lang="ts"></script>

<template>
  <div class="py-16 md:py-24">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="space-y-6">
        <h1
          class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100"
        >
          Hello, I'm Dennis
        </h1>

        <div class="text-lg text-gray-600 dark:text-gray-400 space-y-4">
          <p>
            Welcome to my corner of the internet. This is where I share my
            thoughts, learnings, and experiments as I navigate the world of
            technology and startups.
          </p>

          <p>
            I write about software engineering, startups, and the things I'm
            building and learning along the way.
          </p>
        </div>

        <div class="flex flex-wrap gap-4 pt-4">
          <NuxtLink
            to="/projects"
            class="inline-flex items-center px-6 py-3 rounded-lg bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            View Projects
          </NuxtLink>

          <NuxtLink
            to="/about"
            class="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 font-medium hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
          >
            More About Me
          </NuxtLink>
        </div>
      </div>

      <div class="flex justify-center md:justify-end">
        <img
          src="/avatar.webp"
          alt="Dennis"
          class="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-lg"
        />
      </div>
    </div>
  </div>
</template>
