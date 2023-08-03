import React from 'react';

import { usePageProps } from '@/hooks';
import { ImageComponent, RichText } from '@/components';
import { T6InfoPageDynamic } from '@/types';

export const T6OverviewSection = () => {
  const { contentStack } = usePageProps();
  const { pageData } = contentStack;

  if (!pageData) { return <div>Error get data from server</div> }

  const {
    overview,
    overview: {
      visible,
      title,
      headline_copy,
    }
  }: T6InfoPageDynamic = pageData;

  if (!visible) { return null }

  return (
    <section data-testid='overview section'>
      <div className="p-template-6-overview">
        <h1 className="p-template-6-overview__title" data-testid='overview title'>
          {title}
        </h1>
        <div className="p-template-6-overview__description" data-testid='overview richtext'>
          <RichText text={headline_copy} />
        </div>
      </div>
    </section>
  )
}
