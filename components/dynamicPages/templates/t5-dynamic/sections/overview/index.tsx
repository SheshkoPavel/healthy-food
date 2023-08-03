import React from 'react';

import { usePageProps } from '@/hooks';
import { ImageComponent, RichText } from '@/components';
import { T5SectionSecondaryDynamic } from '@/types';

export const T5OverviewSection = () => {
  const { contentStack } = usePageProps();
  const { pageData }: any = contentStack;

  const { overview }: T5SectionSecondaryDynamic = pageData || {};
  const {
    visible,
    title,
    headline_copy,
    image,
    image_caption,
  } = overview || {};

  if (!pageData || !overview) { return <div>Error get data from server</div> }
  if (!visible) { return null }

  return (
    <section data-testid='overview section'>
      <div className="p-template-5-2-columns-overview">
        <div className="p-template-5-2-columns-overview__column p-template-5-2-columns-overview__column--left">
          <div className="c-image" data-testid='overview image'>
            <div className="c-image__wrapper c-image__wrapper--square">
              <ImageComponent
                className="c-image__image"
                width={609}
                height={609}
                data={image}
              />
            </div>
            <div className="p-template-5-2-columns-overview__image-caption c-caption">
              <div className="c-caption__type">
                {image_caption}
              </div>
            </div>
          </div>
        </div>

        <div className="p-template-5-2-columns-overview__column p-template-5-2-columns-overview__column--right">
          <h1 className="p-template-5-2-columns-overview__title" data-testid='overview title'>
            {title}
          </h1>
          <div className="p-template-5-2-columns-overview__description" data-testid='overview description'>
            <RichText text={headline_copy} />
          </div>
        </div>
      </div>
    </section>
  )
}
