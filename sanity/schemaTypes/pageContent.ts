import { defineField, defineType } from "sanity";

const pageSlugOptions = [
  { title: "Home", value: "home" },
  { title: "About", value: "about" },
  { title: "Research", value: "research" },
  { title: "Publications", value: "publications" },
  { title: "Events", value: "events" },
  { title: "Contact", value: "contact" },
  { title: "News & Media", value: "news-media" },
  { title: "Single Publication", value: "single-publication" },
  { title: "Single News", value: "single-news" }
];

export const pageContentType = defineType({
  name: "pageContent",
  title: "Page Content",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "slug",
      title: "Page Slug",
      type: "string",
      options: {
        list: pageSlugOptions
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "textOverrides",
      title: "Text Overrides",
      type: "array",
      of: [{ type: "textOverride" }]
    }),
    defineField({
      name: "imageOverrides",
      title: "Image Overrides",
      type: "array",
      of: [{ type: "imageOverride" }]
    })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug"
    }
  }
});
