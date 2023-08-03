import { GetServerSideProps } from 'next';
import { getPageProps } from '@/utils';
import { getPageData, getContentstackContent } from '@/services';
import { TemplateT6Dynamic } from '@/components/dynamicPages/templates';

export default function Component(props: any) {
  return (
    <TemplateT6Dynamic />
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return getPageProps({
    contentStack: {
      pageData: getPageData('info_page_t6', 'bltffc718778899c366'),
      global_settings: getContentstackContent('global_settings', 'blte72b3386b1bb1b34'),
    },
    context,
  });
};