import { usePageProps } from '@/hooks';

export const CommonWrapper = ({ children }: any) => {
  const { errors } = usePageProps();

  if (Object.keys(errors).length) {
    return null;
  }

  return children
}
