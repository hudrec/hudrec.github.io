import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    sortOrder: z.number(),
    company: z.string(),
    company_url: z.string().url(),
    name: z.string(),
    description: z.string(),
    img: z.string(),
    technologies: z.array(z.string()),
  })
})

export const collections = { projects };