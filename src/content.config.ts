import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const daily = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/daily' }),
  schema: z.object({
    title: z.string(), issue: z.number(), date: z.coerce.date(),
    description: z.string(), tags: z.array(z.string()).default([]),
    sources: z.array(z.string()).default([]), sponsored: z.boolean().default(false),
  }),
});
export const collections = { daily };
