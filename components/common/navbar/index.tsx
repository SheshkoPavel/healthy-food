import { observer } from 'mobx-react-lite';

import { usePageProps } from '@/hooks';
import { UnauthNavbar } from './unauth';

export const Navbar = observer(() => {
  const { contentStack } = usePageProps();

  const {
    pageData,
  } = contentStack || {};

  const {
    header,
  } = pageData || {};

  if (!header || !header[0]) {
    return null;
  }

  return <UnauthNavbar />
})

