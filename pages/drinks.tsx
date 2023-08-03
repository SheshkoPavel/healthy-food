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
      pageData: getPageData('page_type_2', 'bltb055cdac7e7b3dbd'),
      global_settings: getContentstackContent('global_settings', 'blt563bde79f5f953fc'),
    },
    context,
  });
};
