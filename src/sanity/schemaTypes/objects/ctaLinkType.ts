import { defineField, defineType } from 'sanity';

export const ctaLinkType = defineType({
  name: 'ctaLink',
  title: 'Call To Action Link',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Label', type: 'string' }),
    defineField({ name: 'href', title: 'Href', type: 'string' })
  ]
});
