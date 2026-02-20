import { defineArrayMember, defineField, defineType } from 'sanity';

export const publicationType = defineType({
  name: 'publication',
  title: 'Publication',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: 'type', title: 'Publication Type', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'summary', title: 'Summary', type: 'text', rows: 4, validation: (rule) => rule.required() }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })]
    }),
    defineField({ name: 'publishedAt', title: 'Published At', type: 'datetime' })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'type'
    }
  }
});
