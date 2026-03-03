import { defineField, defineType } from "sanity";

export const imageOverrideType = defineType({
  name: "imageOverride",
  title: "Image Override",
  type: "object",
  fields: [
    defineField({
      name: "nodeName",
      title: "Key",
      type: "string",
      description: "Content key used by the page component, for example: home.hero.image",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "nodeId",
      title: "Legacy ID (optional)",
      type: "string",
      description: "Optional legacy field from the earlier renderer architecture."
    }),
    defineField({
      name: "url",
      title: "Image URL",
      type: "string",
      validation: (rule) => rule.required()
    })
  ],
  preview: {
    select: {
      title: "nodeName",
      subtitle: "url"
    }
  }
});
