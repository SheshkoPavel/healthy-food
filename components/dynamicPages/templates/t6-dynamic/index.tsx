import React, { Fragment } from 'react';

import { usePageProps } from '@/hooks';
import { T6MainContent } from '@/types';

import {
  T6OverviewSection,
  T6TabsSection,
  T6QuoteSection,
  T6ImageOrVideoWithTextSection,
  T6ContactSection,
} from './sections';

const getSectionComponent = (content: T6MainContent) => {
  const {
    tabbed,
    quote,
    image_with_text,
    contact_information,
  } = content;

  if (tabbed) {
    return <T6TabsSection data={tabbed} />
  }
  if (quote) {
    return <T6QuoteSection data={quote} />
  }
  if (image_with_text) {
    return <T6ImageOrVideoWithTextSection data={image_with_text} />
  }
  if (contact_information) {
    return <T6ContactSection data={contact_information} />
  }

  return <>
    <div>Unknown section</div>
  </>
}

export const TemplateT6Dynamic = () => {
  const { contentStack } = usePageProps();
  const { pageData } = contentStack;

  if (!pageData) { return <div>Error get data from server</div> }

  const isOverviewVisible = pageData.overview && pageData.overview.visible;

  return (
    <>
      {isOverviewVisible && <div className='c-divider c-divider--transparent c-divider--top' />}
      {isOverviewVisible && <T6OverviewSection />}

      {pageData.main_content
        .filter((content: any) => {
          const key = Object.keys(content)[0]
          return content[key].visible
        })
        .map((content: any, index: number) => {

          const showDivider = index === 0 && !isOverviewVisible
            ? false
            : true

          const isTabbedSection = content.tabbed;

          return (
            <Fragment key={index}>
              {showDivider
                ? isTabbedSection
                  ? <div className="c-divider c-divider--transparent c-divider--decreased" />
                  : <div className="c-divider" />
                : <div className="c-divider c-divider--transparent c-divider--bottom" />}
              {getSectionComponent(content)}
            </Fragment>
          )
        })}
      <div className="c-divider" />
    </>
  )
}
