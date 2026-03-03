import { defineField, defineType } from "sanity";

export const textOverrideType = defineType({
  name: "textOverride",
  title: "Text Override",
  type: "object",
  fields: [
    defineField({
      name: "nodeName",
      title: "Key",
      type: "string",
      description: "Content key used by the page component, for example: home.hero.title",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "nodeId",
      title: "Legacy ID (optional)",
      type: "string",
      description: "Optional legacy field from the earlier renderer architecture."
    }),
    defineField({
      name: "value",
      title: "Value",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required()
    })
  ],
  preview: {
    select: {
      title: "nodeName",
      subtitle: "value"
    }
  }
});
