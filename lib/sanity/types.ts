export interface SanityTextOverride {
  nodeName?: string;
  nodeId?: string;
  value: string;
}

export interface SanityImageOverride {
  nodeName?: string;
  nodeId?: string;
  url: string;
}

export interface SanityEventImageSet {
  eventSlug?: string;
  previewImageUrl?: string;
  galleryImageUrls?: string[];
}

export interface SanityPageContent {
  slug: string;
  textOverrides?: SanityTextOverride[];
  imageOverrides?: SanityImageOverride[];
  eventImageSets?: SanityEventImageSet[];
}
