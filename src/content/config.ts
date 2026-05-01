import { defineCollection, z } from 'astro:content';

const postSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  publishedAt: z.coerce.date().optional(),
  author: z.string().optional().default('NurOS Team'),
  tags: z.array(z.string()).optional().default([]),
});

const postsEn = defineCollection({ type: 'content', schema: postSchema });
const postsRu = defineCollection({ type: 'content', schema: postSchema });
const postsKz = defineCollection({ type: 'content', schema: postSchema });

export const collections = {
  'posts-en': postsEn,
  'posts-ru': postsRu,
  'posts-kz': postsKz,
};
