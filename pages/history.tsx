import { GetServerSideProps } from 'next';
import { getPageProps } from '@/utils';
import { getPageData, getContentstackContent } from '@/services';
import { TemplateT4Dynamic } from '@/components/dynamicPages/templates';

export default function Component(props: any) {
  return (
    <TemplateT4Dynamic />
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return getPageProps({
    contentStack: {
      pageData: getPageData('section_landing_t4', 'blt1e6f09004154b216'),
      global_settings: getContentstackContent('global_settings', 'blte72b3386b1bb1b34'),
    },
    context,
  });
};