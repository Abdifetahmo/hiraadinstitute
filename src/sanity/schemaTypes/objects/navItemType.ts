import { defineField, defineType } from 'sanity';

export const navItemType = defineType({
  name: 'navItem',
  title: 'Navigation Item',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Label', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'href', title: 'Path', type: 'string', validation: (rule) => rule.required() })
  ]
});
