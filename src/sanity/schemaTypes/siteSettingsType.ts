import { defineArrayMember, defineField, defineType } from 'sanity';

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Institute Name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
    defineField({ name: 'contactEmail', title: 'Contact Email', type: 'string' }),
    defineField({ name: 'contactLocation', title: 'Contact Location', type: 'string' }),
    defineField({
      name: 'navItems',
      title: 'Navigation Items',
      type: 'array',
      of: [defineArrayMember({ type: 'navItem' })]
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'tagline'
    }
  }
});
