export interface Link {
  title?: string;
  href?: string;
}

export interface Image {
  title: string;
  url: string;
  created_at: Date | string;
  created_by: string;
  updated_at: Date | string;
  updated_by: string;
  file_size: string;
  filename: string;
  uid: string;
}

export interface ImageWithAltText {
  image: Image;
  image_alt_text?: string;
}

interface CarouselWithVideoItem {
  image?: ImageWithAltText;
  video_link?: string;
}

export interface CarouselWithVideo {
  title: string;
  items: CarouselWithVideoItem[];
}

export interface Audience {
  type?: string[];
}

export interface Abstract {
  title?: string;
  link_title?: string;
  summary?: string;
  thumbnail?: ImageWithAltText;
}

export interface PageReference {
  abstract: Abstract;
  audience: Audience;
  categories: any[];
  url: string;
  _content_type_uid: string;
}

interface OGTags {
  value: string;
  key: string;
}

export interface SEO {
  title: string;
  description?: string;
  canonical?: {
    title?: string;
    href?: string;
  };
  og_tags: OGTags[];
  noindex: boolean;
  nofollow: boolean;
}

export interface CTASimple {
  title: string;
  description?: string;
  primary?: string;
  primary_copy: string;
  link: PageReference[];
  _content_type_uid: string;
}

export interface ICTADownload {
  title: string;
  description?: string;
  primary?: string;
  primary_copy: string;
  file: any;
  _content_type_uid: string;
}

export type CTA = CTASimple & ICTADownload;

interface LogoFooter {
  image: Image;
  image_alt_text: string;
  audience: Audience;
}

interface MainContantFooter {
  two_column_navigation: {
    column_1: {
      visible: boolean;
      title?: string;
      links: PageReference[];
    };
    column_2: {
      visible: boolean;
      title?: string;
      links: PageReference[];
    };
  }
}

export interface Footer {
  title: string;
  logo: LogoFooter[];
  background: LogoFooter[];
  main_content: MainContantFooter[];
  utility_navigation: PageReference[];
}

interface PrimaryNavigation {
  visible: boolean;
  audience: Audience;
  links: PageReference[];
}

interface SecondaryNavigationItems {
  title: string;
  sub_links: PageReference[];
  sub_links_with_images: {
    title: string;
    sub_links: PageReference[];
  };
}

interface SecondaryNavigation {
  visible: boolean;
  audience: Audience;
  items: SecondaryNavigationItems[];
  show_search: boolean;
}

export interface Header {
  title: string;
  logo: ImageWithAltText;
  enable_search: boolean;
  primary_navigation: PrimaryNavigation[];
  secondary_navigation: SecondaryNavigation[];
  account_navigation: {
    links: PageReference[];
  };
}

export interface Address {
  street_1?: string;
  street_2?: string;
  city?: string;
  state_province?: string;
  postal_code?: string;
  country?: string;
}

interface EntriesScheduleClubHours {
  day: string;
  start_time: string;
  end_time: string;
}

interface ScheduleClubHoursGlobalSettings {
  entries: EntriesScheduleClubHours[];
}

interface FeatureFlagsGlobalSettings {
  feature: string;
  enabled: boolean;
}

export interface GlobalSettings {
  title: string;
  website_title: string;
  copyright: string;
  club_address: Address;
  phone_number: string;
  club_hours: {
    title?: string;
    schedule: ScheduleClubHoursGlobalSettings;
  };
  logo: Image;
  favicon: any;
  login_button_text?: string;
  feature_flags: FeatureFlagsGlobalSettings[];
}

export interface ContentCategory {
  title: string;
}

export interface MenuItem {
  title: string;
  name: string;
  summary?: string;
  categories?: ContentCategory[];
  image: ImageWithAltText;
}

export interface Quote {
  title?: string;
  text: string;
  attribution?: string;
}

export interface ClubContact {
  title: string;
  name?: string;
  photo: ImageWithAltText;
  role?: string;
  email_address?: string;
  phone_number?: string;
  mailing_address: Address;
}
