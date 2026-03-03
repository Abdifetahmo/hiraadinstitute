import { defineField, defineType } from "sanity";

export const eventImageSetType = defineType({
  name: "eventImageSet",
  title: "Event Image Set",
  type: "object",
  fields: [
    defineField({
      name: "eventSlug",
      title: "Event Slug",
      type: "string",
      description: "Must match the event route slug (for example: hiraad-education-forum-2026).",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "previewImage",
      title: "Preview Image",
      type: "image",
      options: { hotspot: true },
      description: "Used on the events listing card and the single-event preview image."
    }),
    defineField({
      name: "galleryImages",
      title: "Single View Gallery Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      description: "Displayed in the image grid on the single event page."
    })
  ],
  preview: {
    select: {
      title: "eventSlug"
    }
  }
});
