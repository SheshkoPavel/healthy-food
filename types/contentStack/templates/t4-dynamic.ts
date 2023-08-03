import {
  Abstract,
  Audience,
  CTA,
  ClubContact,
  Footer,
  Header,
  ImageWithAltText,
  Link,
  PageReference,
  Quote,
  SEO,
} from '../common';

interface HeroWithMosaicView {
  title: string;
  hero: {
    image?: ImageWithAltText;
    logo?: ImageWithAltText;
  };
  mosaic_image: {
    title?: string;
    title_copy?: string;
    image_1?: ImageWithAltText;
    image_2?: ImageWithAltText;
    image_3?: ImageWithAltText;
    image_4?: ImageWithAltText;
    image_5?: ImageWithAltText;
  };
  video_link?: string;
}

export interface T4Overview {
  visible: boolean;
  title: string;
  headline_copy?: string;
  hero: HeroWithMosaicView[];
}

export interface T4FeaturedMainContent {
  visible: boolean;
  title: string;
  headline_copy?: string;
  items: PageReference[];
  cta?: CTA[];
  links?: Link[];
}

export interface T4ClubContactMainContent {
  visible: boolean;
  title?: string;
  item: ClubContact[];
}

export interface T4QuoteMainContent {
  visible: boolean;
  item: Quote[];
}

export interface T4TwoColumnEntrySummariesMainContent {
  visible: boolean;
  title: string;
  headline_copy?: string;
  subtitle?: string;
  secondary_copy?: string;
  link?: PageReference[];
  summary_items: PageReference[];
  cta?: CTA[];
}

export interface T4TwoColumnSummariesWithCarouselMainContent {
  visible: boolean;
  title: string;
  headline_copy?: string;
  subtitle?: string;
  secondary_copy?: string;
  link?: PageReference[];
  summary_items?: PageReference[];
  carousel?: any[];
  cta?: CTA[];
}

export interface T4FilteredEntrySummaryListMainContent {
  visible: boolean;
  title?: string;
  section_anchor?: string;
  limit: number;
  sort_by: string;
  categories?: any[];
  items?: PageReference[];
  cta: CTA[];
}

export interface T4CrossLinkedContentMainContent {
  visible: boolean;
  item?: PageReference[];
  cta?: CTA[];
}

export interface T4MainContent {
  overview?: any;
  featured?: T4FeaturedMainContent;
  club_contact?: T4ClubContactMainContent;
  quote?: T4QuoteMainContent;
  two_column_entry_summaries?: T4TwoColumnEntrySummariesMainContent;
  two_column_summaries_with_carousel?: T4TwoColumnSummariesWithCarouselMainContent;
  filtered_entry_summary_list?: T4FilteredEntrySummaryListMainContent;
  cross_linked_content?: T4CrossLinkedContentMainContent;
}

export interface T4SectionLandingPageDynamic {
  url: string;
  audience: Audience;
  abstract: Abstract;
  categories: any[];
  header: Header[];
  overview: T4Overview;
  main_content: T4MainContent[];
  footer: Footer[];
  seo: SEO;
  content_type_uid: string;
  uid: string;
}
