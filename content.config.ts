import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    notes: defineCollection({
      type: 'page',
      source: 'notes/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        publishedAt: z.coerce.date(),
        updatedAt: z.coerce.date(),
        tags: z.array(z.string()),
      }),
    }),
  },
});
