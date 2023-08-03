import { createContext, useContext } from 'react';

import { PageProps } from '@/types';

export const PagePropsContext = createContext<any>(null);

export function usePageProps(): PageProps {
  const pageProps = useContext(PagePropsContext);
  return pageProps;
}
