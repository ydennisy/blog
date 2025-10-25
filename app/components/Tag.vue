<script setup lang="ts">
interface Props {
  label: string;
  variant?: 'solid' | 'outline' | 'soft';
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

withDefaults(defineProps<Props>(), {
  variant: 'soft',
  size: 'sm',
});
</script>

<template>
  <UBadge
    :label="label"
    :variant="variant"
    :size="size"
    color="neutral"
    class="font-mono"
  />
</template>
