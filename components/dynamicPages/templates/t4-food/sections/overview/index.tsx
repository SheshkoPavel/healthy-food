import React from 'react';

import { usePageProps } from '@/hooks';
import { ImageComponent, RichText } from '@/components';

export const T4OverviewSection = ({ data }: any) => {
  const { contentStack } = usePageProps();
  const { pageData } = contentStack;

  if (!pageData) { return <div>Error get data from server</div> }

  const {
    visible,
    title,
    headline_copy,
    image,
  }: any = data;

  if (!visible) { return null }

  return (
    <>
      <section >
        <div className="p-template-4__overview">
          <h1 className="p-template-4__overview-title">
            {title}
          </h1>

          <ImageComponent
            className="c-image__image"
            width={576}
            height={864}
            data={image}
          />

          <div className="p-template-4__overview-description">
            <RichText text={headline_copy} />
          </div>

        </div>
      </section>
    </>
  )
}
