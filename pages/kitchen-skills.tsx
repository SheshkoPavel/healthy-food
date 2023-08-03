import { GetServerSideProps } from 'next';
import { getPageProps } from '@/utils';
import { getPageData, getContentstackContent } from '@/services';
import { FoodHome } from '@/components/dynamicPages/templates';

export default function Component(props: any) {
  return (
    <FoodHome />
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return getPageProps({
    contentStack: {
      pageData: getPageData('page_type_1', 'bltd0d9cbe8fa9799cb'),
      global_settings: getContentstackContent('global_settings', 'blt563bde79f5f953fc'),
    },
    context,
  });
};