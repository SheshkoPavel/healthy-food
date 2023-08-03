import {
  Abstract,
  Audience,
  CTA,
  ClubContact,
  Footer,
  Header,
  ImageWithAltText,
  PageReference,
  SEO,
} from '../common';

export interface T5Overview {
  visible: boolean;
  title?: string;
  headline_copy?: string;
  image: ImageWithAltText;
  image_caption?: string;
}

interface T5ScheduleEntries {
  day: string;
  time: string;
}

export interface T5ScheduleMainContent {
  visible: boolean;
  title?: string;
  headline_copy?: string;
  contact_person?: ClubContact[];
  schedule: {
    title?: string;
    entries: T5ScheduleEntries[];
  }[];
  files?: any[];
  cta?: CTA[];
}

export interface T5StaffMainContent {
  visible: boolean;
  title?: string;
  items: ClubContact[];
}

export interface T5TwoColumnMainContent {
  visible: boolean;
  column_1: {
    video_link?: string;
    title?: string;
    headline_copy?: string;
    link?: PageReference[];
    files?: any[];
  };
  column_2: {
    items?: PageReference[];
  };
}

export interface T5OneRowMainContent {
  visible: boolean;
  title?: string;
  items: PageReference[];
}

export interface T5TwoColumnWithCTAMainContent {
  visible: boolean;
  column_1: {
    title?: string;
    items?: PageReference[];
  };
  column_2: {
    title?: string;
    items?: PageReference[];
  };
  cta?: CTA[];
}

export interface T5MainContent {
  schedule: T5ScheduleMainContent;
  staff: T5StaffMainContent;
  two_column: T5TwoColumnMainContent;
  one_row: T5OneRowMainContent;
  two_column_with_cta: T5TwoColumnWithCTAMainContent;
}

export interface T5SectionSecondaryDynamic {
  url: string;
  audience: Audience;
  abstract: Abstract;
  categories: any[];
  header: Header[];
  overview: T5Overview;
  main_content: T5MainContent[];
  footer: Footer[];
  seo: SEO;
  content_type_uid: string;
  uid: string;
}
