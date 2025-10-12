<script setup lang="ts"></script>

<template>
  <UApp>
    <UHeader>
      <template #left>
        <NuxtLink to="/"> Home </NuxtLink>
        <NuxtLink to="/tils"> TILs </NuxtLink>
        <NuxtLink to="/"> Blog </NuxtLink>
        <NuxtLink to="/"> Projects </NuxtLink>
        <NuxtLink to="/"> About </NuxtLink>
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
      </template>
    </UHeader>

    <UMain>
      <UContainer><NuxtPage /></UContainer>
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
      </template>
    </UFooter>
  </UApp>
</template>
