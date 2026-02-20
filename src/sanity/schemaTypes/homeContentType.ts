import { defineArrayMember, defineField, defineType } from 'sanity';

export const homeContentType = defineType({
  name: 'homeContent',
  title: 'Home Page Content',
  type: 'document',
  fields: [
    defineField({ name: 'heroTitle', title: 'Hero Title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'heroSubtitle', title: 'Hero Subtitle', type: 'string' }),
    defineField({ name: 'heroDescription', title: 'Hero Description', type: 'text', rows: 4 }),
    defineField({ name: 'primaryCta', title: 'Primary CTA', type: 'ctaLink' }),
    defineField({ name: 'secondaryCta', title: 'Secondary CTA', type: 'ctaLink' }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'homeHighlight',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 })
          ]
        })
      ]
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'homeStat',
          fields: [
            defineField({ name: 'value', title: 'Value', type: 'string', validation: (rule) => rule.required() }),
            defineField({ name: 'label', title: 'Label', type: 'string', validation: (rule) => rule.required() })
          ]
        })
      ]
    }),
    defineField({
      name: 'featuredThemes',
      title: 'Featured Themes',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })]
    })
  ],
  preview: {
    prepare: () => ({
      title: 'Home Content',
      subtitle: 'Hero and homepage sections'
    })
  }
});
