import { GetServerSideProps } from 'next';
import { DynamicPage, getDynamicServerSideProps } from '@/components';
import { Stack } from '@/services';

export default function Component(props: any) {

  return (
    <DynamicPage />
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // if(context.query){
  //   Stack.livePreviewQuery(context.query)
  // }
  return await getDynamicServerSideProps(context);
};
