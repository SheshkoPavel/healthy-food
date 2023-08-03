import React from 'react';

import { usePageProps } from '@/hooks';
import { useShouldShowComputedCarousel } from '@/components';
import { isPageAvailable } from '@/utils';
import { T5OneRowMainContent } from '@/types';

import { Carousel } from './carousel';
import { List } from './list';

export const T5OneRowListSection = ({ data }: any) => {
  const { isAuthorized } = usePageProps();

  if (!data) { return <div>Error get data from server</div> }

  const {
    title,
    items = [],
    visible,
  }: T5OneRowMainContent = data;

  if (!visible) { return null }

  const availableItems = items.filter(item => isPageAvailable(item, isAuthorized));

  const shouldShowCarousel = useShouldShowComputedCarousel(availableItems);

  return (
    <section>
      {
        shouldShowCarousel
          ? <Carousel title={title} items={availableItems} />
          : <List title={title} items={availableItems} />
      }
    </section>
  )
}
