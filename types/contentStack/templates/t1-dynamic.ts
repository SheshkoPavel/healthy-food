import {
  Abstract,
  Audience,
  CTA,
  CarouselWithVideo,
  Footer,
  Header,
  ImageWithAltText,
  PageReference,
  Quote,
  SEO,
} from '../common';

export interface T1Overview {
  visible: boolean;
  carousel_with_video: CarouselWithVideo[];
}

export interface T1TwoColumnMainContent {
  visible: boolean;
  title: string;
  headline_copy?: string;
  link?: PageReference[];
  image_with_logo?: {
    image: ImageWithAltText;
    logo: ImageWithAltText;
  };
  caption?: string;
  link_copy?: PageReference[];
}

export interface T1QuoteMainContent {
  visible: boolean;
  title?: string;
  item: Quote[];
}

export interface T1MosaicCarouselMainContent {
  visible: boolean;
  mosaic_carousel: any[];
}

interface T1TabbedTab {
  title: string;
  content: {
    image_1: ImageWithAltText;
    image_2: ImageWithAltText;
    text_block: {
      title: string;
      headline_copy?: string;
    };
    text_block_2: {
      title: string;
      headline_copy?: string;
    };
  }
}

export interface T1TabbedMainContent {
  visible: boolean;
  title: string;
  headline_copy?: string;
  link?: PageReference[];
  tabs: T1TabbedTab[];
}

export interface T1FeaturedMainContent {
  visible: boolean;
  items: PageReference[];
  cta: CTA[];
}

export interface T1MainContent {
  two_column?: T1TwoColumnMainContent;
  quote?: T1QuoteMainContent;
  mosaic_carousel?: T1MosaicCarouselMainContent;
  tabbed?: T1TabbedMainContent;
  featured?: T1FeaturedMainContent;
}

export interface T1PublicFacingHomeDynamic {
  url: string;
  audience: Audience;
  abstract: Abstract;
  categories: any[];
  header: Header[];
  overview: T1Overview;
  main_content: T1MainContent[];
  footer: Footer[];
  seo: SEO;
  content_type_uid: string;
  uid: string;
}
