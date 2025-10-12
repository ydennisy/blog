import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    tils: defineCollection({
      type: "page",
      source: "tils/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        publishedAt: z.string(),
        updatedAt: z.string(),
        tags: z.array(z.string()),
      }),
    }),
  },
});
