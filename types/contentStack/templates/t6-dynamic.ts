import {
  Abstract,
  Audience,
  CTA,
  ClubContact,
  Footer,
  Header,
  ImageWithAltText,
  Quote,
  SEO,
} from '../common';

export interface T6Overview {
  visible: boolean;
  title: string;
  headline_copy?: string;
}

interface T6TabbedTabs {
  title: string;
  content: {
    image?: ImageWithAltText;
    video_link?: string;
    title?: string;
    headline_copy?: string;
    files?: any[];
    cta?: CTA[];
  };
}

export interface T6TabbedMainContent {
  visible: boolean;
  title?: string;
  headline_copy?: string;
  tabs: T6TabbedTabs[];
}

export interface T6QuoteMainContent {
  visible: boolean;
  title?: string;
  item: Quote[];
}

export interface T6ImageOrVideoWithTextMainContent {
  visible: boolean;
  title?: string;
  files?: CTA[];
  cta?: CTA[];
  headline_copy?: string;
  image: ImageWithAltText;
  video_link?: string;
  subtitle: string;
  secondary_copy: string;
  sub_files?: CTA[];
  sub_cta?: CTA[];
}

export interface T6ContactInformationMainContent {
  visible: boolean;
  title: string;
  item: ClubContact[];
}

export interface T6MainContent {
  tabbed: T6TabbedMainContent;
  quote: T6QuoteMainContent;
  image_with_text: T6ImageOrVideoWithTextMainContent;
  contact_information: T6ContactInformationMainContent;
}

export interface T6InfoPageDynamic {
  url: string;
  audience: Audience;
  abstract: Abstract;
  categories: any[];
  header: Header[];
  overview: T6Overview;
  main_content: T6MainContent[];
  footer: Footer[];
  seo: SEO;
  content_type_uid: string;
  uid: string;
}
