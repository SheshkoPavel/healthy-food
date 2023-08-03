import {
  Abstract,
  Audience,
  CTA,
  ClubContact,
  Footer,
  Header,
  ImageWithAltText,
  Link,
  MenuItem,
  PageReference,
  SEO,
} from '../common';

export interface T13Overview {
  visible: boolean;
  title: string;
  anchor_links: Link[];
}

interface T13SchedulesItemsEntries {
  day: string;
  time: string;
}

interface T13SchedulesItems {
  title: string;
  entries: T13SchedulesItemsEntries[];
}

export interface T13TwoColumnMainContent {
  visible: boolean;
  column_1: {
    title: string;
    headline_copy?: string;
    image: ImageWithAltText;
  };
  column_2: {
    image: ImageWithAltText;
    caption?: string;
    schedules: {
      title?: string;
      items: T13SchedulesItems[];
    };
  };
  cta?: CTA[];
}

export interface T13ItemCarouselContactInformation {
  caption?: string;
  image: ImageWithAltText;
}

interface T13CarouselContactInformation {
  title: string;
  items: T13ItemCarouselContactInformation[];
}

export interface T13ContactInformationMainContent {
  visible: boolean;
  title: string;
  item: ClubContact[];
  cta?: CTA[];
  carousel?: T13CarouselContactInformation[];
}

export interface T13CommonMenuContent {
  visible: boolean;
  title: string;
  headline_copy?: string;
  items?: MenuItem[];
  section_anchor?: string;
}

export interface T13MenuContent {
  featured: T13CommonMenuContent;
  big_size_cards: T13CommonMenuContent;
  mixed_size_cards: T13CommonMenuContent;
  small_size_cards: T13CommonMenuContent;
  small_size_cards_without_images: T13CommonMenuContent;
}

export interface T13MenuMainContent {
  visible: boolean;
  title?: string;
  menu_content: T13MenuContent[];
}

export interface T13CrossLinkedContentMainContent {
  visible: boolean;
  title: string;
  items: PageReference[];
  cta?: CTA[];
}

export interface T13MainContent {
  two_column: T13TwoColumnMainContent;
  contact_information: T13ContactInformationMainContent;
  menu: T13MenuMainContent;
  cross_linked_content: T13CrossLinkedContentMainContent;
}

export interface T13DetailWithMenuDynamic {
  url: string;
  audience: Audience;
  abstract: Abstract;
  categories: any[];
  header: Header[];
  overview: T13Overview;
  main_content: T13MainContent[];
  footer: Footer[];
  seo: SEO;
  content_type_uid: string;
  uid: string;
}
