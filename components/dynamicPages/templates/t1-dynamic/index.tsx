import React, { Fragment } from 'react';

import { usePageProps } from '@/hooks';
import { T1MainContent } from '@/types';

import {
  T1OverviewSection,
  T1MosaicCarouselSection,
  T1QuoteSection,
  T1TwoColumnsSection,
  T1TabsSection,
  T1FeaturedSection,
} from './sections';

const getSectionComponent = (content: T1MainContent) => {
  const {
    two_column,
    quote,
    mosaic_carousel,
    tabbed,
    featured,
  } = content;

  if (two_column) {
    return <T1TwoColumnsSection data={two_column} />
  }
  if (quote) {
    return <T1QuoteSection data={quote} />
  }
  if (mosaic_carousel) {
    return <T1MosaicCarouselSection data={mosaic_carousel} />
  }

  if (tabbed) {
    return <T1TabsSection data={tabbed} />
  }
  if (featured) {
    return <T1FeaturedSection data={featured} />
  }

  return <>
    <div>Unknown section</div>
  </>
}

export const TemplateT1Dynamic = () => {
  const { contentStack } = usePageProps();
  const { pageData } = contentStack;

  if (!pageData) { return <div>Error get data from server</div> }
  const isOverviewVisible = pageData.overview && pageData.overview.visible;

  return (
    <>
      <T1OverviewSection />

      {pageData.main_content
        .filter((content: any) => {
          const key = Object.keys(content)[0]
          return content[key].visible
        })
        .map((content, index: number, arr) => {

          let divider: any = <div className="c-divider c-divider--transparent c-divider--decreased-t1" />;

          if (index === 0 && !isOverviewVisible){
            divider = <div className="c-divider c-divider--transparent c-divider--bottom" />
          }

          const previousSection = arr[index - 1] || {};

          if (previousSection.mosaic_carousel){
            divider = null;
          }

          return (
            <Fragment key={index} >
              {divider}
              {getSectionComponent(content)}
            </Fragment>
          )
        })}
      <div className="c-divider c-divider--transparent c-divider--bottom" />
    </>
  )
}

