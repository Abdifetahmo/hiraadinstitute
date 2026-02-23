import { groq } from "next-sanity";

export const PAGE_CONTENT_QUERY = groq`
  *[_type == "pageContent" && slug == $slug][0] {
    slug,
    textOverrides[]{
      nodeName,
      nodeId,
      value
    },
    imageOverrides[]{
      nodeName,
      nodeId,
      url
    }
  }
`;
