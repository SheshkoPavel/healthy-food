import {
  ContentStack,
  Context,
} from '@/types'

export interface PageProps {
  contentStack: ContentStack;
  isAuthorized: boolean;
  context: Context;
  errors: any;
  dynamicPageError: any;
  showLayoutPattern?: boolean;
  url?: string;
}
