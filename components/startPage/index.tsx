import React from 'react';
import { observer } from 'mobx-react-lite';

import { usePageProps } from '@/hooks';


export const StartPage = observer((props: any) => {
  const { contentStack } = usePageProps();
  const {
    pageData,
    global_settings,
  }: any = contentStack || {};

  if (!pageData) {
    return <div>Error fetch data</div>
  }

  return (
    <div className="p-login">
        It work's
    </div>
  );
})
