import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// src/content/cases/<lang>/<slug>.md: the file name is the URL slug,
// translationKey links the PT and EN versions of a case.
const cases = defineCollection({
  loader: glob({ pattern: '{pt,en}/*.md', base: './src/content/cases' }),
  schema: z.object({
    title: z.string(),
    translationKey: z.string(),
    order: z.number().int().positive(),
    context: z.array(z.string()).min(1),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).min(1),
    tags: z.array(z.string()).min(1),
  }),
});

export const collections = { cases };
