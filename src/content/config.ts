import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).optional().default([]),
    draft: z.boolean().optional().default(false),
    tier: z.enum(['Beginner', 'Intermediate', 'Advanced']).optional(),
    pillar: z.string().optional(),
  }),
});

// Inspection-grade, plug-and-play deliverables (SOPs, policies, protocols, forms, etc.).
// Each is a ready-to-use document with placeholders for company/system/process specifics
// plus a worked filled-in specimen. relatedArticles links it back to the explainer(s).
const templates = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    docType: z.enum([
      'SOP', 'Policy', 'Work Instruction', 'Protocol', 'Plan', 'Form', 'Log',
      'Checklist', 'Risk Assessment', 'Matrix', 'Report', 'Template', 'Record',
      'Specification', 'Guideline',
    ]),
    pillar: z.string(),
    relatedArticles: z.array(z.string()).optional().default([]),
    tags: z.array(z.string()).optional().default([]),
    tier: z.enum(['Beginner', 'Intermediate', 'Advanced']).optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { articles, templates };
