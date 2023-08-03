import { GetServerSideProps } from 'next';
import { DynamicPage, getDynamicServerSideProps } from '@/components';
import { Stack } from '@/services';

import ContentstackLivePreview from "@contentstack/live-preview-utils";
import { useEffect } from 'react';

export default function Component(props: any) {
  useEffect(() => {
    ContentstackLivePreview.init();
    console.log('init preview')
  }, []);

  return (
    <DynamicPage />
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  if(context.query){
    Stack.livePreviewQuery(context.query)
  }
  return await getDynamicServerSideProps(context);
};
