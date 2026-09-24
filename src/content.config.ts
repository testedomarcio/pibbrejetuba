import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const common = z.object({ title: z.string(), description: z.string(), date: z.coerce.date(), author: z.string().default('PIB Brejetuba'), category: z.string().optional(), seriesOrder: z.number().int().positive().optional(), draft: z.boolean().default(false) });
export const collections = {
  artigos: defineCollection({loader: glob({pattern:'**/*.md',base:'./src/content/artigos'}),schema:common}),
  mensagens: defineCollection({loader: glob({pattern:'**/*.md',base:'./src/content/mensagens'}),schema:common.extend({ passage: z.string().optional() })}),
  eventos: defineCollection({loader: glob({pattern:'**/*.md',base:'./src/content/eventos'}),schema:common.extend({ location: z.string().optional() })})
};
