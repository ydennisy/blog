<script setup lang="ts">
const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/notes', label: 'Notes' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
];
</script>

<template>
  <UApp class="min-h-screen flex flex-col">
    <UHeader>
      <template #left>
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-primary/10"
          active-class="text-primary bg-primary/10"
        >
          {{ link.label }}
        </NuxtLink>
      </template>

      <template #right>
        <UColorModeButton />

        <UButton
          to="https://github.com/ydennisy"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
        <UButton
          to="https://www.linkedin.com/in/dennisyurkevich/"
          target="_blank"
          icon="i-simple-icons-linkedin"
          aria-label="Linkedin"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UHeader>

    <UMain class="flex-1">
      <UContainer><slot /></UContainer>
    </UMain>

    <USeparator />

    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          Built with ❤️ in London • © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <UButton
          to="https://github.com/ydennisy"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
        <UButton
          to="https://www.linkedin.com/in/dennisyurkevich/"
          target="_blank"
          icon="i-simple-icons-linkedin"
          aria-label="Linkedin"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </UApp>
</template>
