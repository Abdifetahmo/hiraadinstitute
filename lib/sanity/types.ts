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

export interface SanityPageContent {
  slug: string;
  textOverrides?: SanityTextOverride[];
  imageOverrides?: SanityImageOverride[];
}
