import React from 'react';

import { usePageProps } from '@/hooks';
import { RichText } from '@/components';
import { T4SectionLandingPageDynamic } from '@/types';

import { T4OverviewHero } from './hero';

export const T4OverviewSection = () => {
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
  }: T4SectionLandingPageDynamic = pageData;

  if (!visible) { return null }

  return (
    <>
      <section data-testid='overview section'>
        <div className="p-template-4__overview">
          <h1 className="p-template-4__overview-title" data-testid='overview title'>
            {title}
          </h1>
          <div className="p-template-4__overview-description" data-testid='overview description'>
            <RichText text={headline_copy} />
          </div>
          <T4OverviewHero />
        </div>
      </section>
    </>
  )
}
