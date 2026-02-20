import { defineArrayMember, defineField, defineType } from 'sanity';

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
    defineField({ name: 'lead', title: 'Lead Text', type: 'text', rows: 4 }),
    defineField({
      name: 'sections',
      title: 'Content Sections',
      type: 'array',
      of: [defineArrayMember({ type: 'contentSection' })]
    }),
    defineField({ name: 'cta', title: 'Page CTA', type: 'ctaLink' })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current'
    }
  }
});
