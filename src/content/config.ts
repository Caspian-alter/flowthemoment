import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    lang: z.enum(['zh', 'en']),
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    example: z.boolean().default(true)
  })
});

export const collections = { blog };
