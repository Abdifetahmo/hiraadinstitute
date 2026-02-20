import { defineArrayMember, defineField, defineType } from 'sanity';

export const contentSectionType = defineType({
  name: 'contentSection',
  title: 'Content Section',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'text', title: 'Body Text', type: 'text', rows: 4, validation: (rule) => rule.required() }),
    defineField({
      name: 'bullets',
      title: 'Bullet Points',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })]
    })
  ]
});
