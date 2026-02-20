import { homeContentType } from './homeContentType';
import { newsItemType } from './newsItemType';
import { pageType } from './pageType';
import { publicationType } from './publicationType';
import { siteSettingsType } from './siteSettingsType';
import { contentSectionType } from './objects/contentSectionType';
import { ctaLinkType } from './objects/ctaLinkType';
import { navItemType } from './objects/navItemType';

export const schemaTypes = [
  navItemType,
  ctaLinkType,
  contentSectionType,
  siteSettingsType,
  homeContentType,
  pageType,
  newsItemType,
  publicationType
];
