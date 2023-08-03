import { GetServerSideProps } from 'next';
import { DynamicPage, getDynamicServerSideProps } from '@/components';

export default function Component(props: any) {
  return (
    <DynamicPage />
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return getDynamicServerSideProps(context);
};
