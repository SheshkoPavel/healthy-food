import React, { Fragment } from 'react';

import { usePageProps } from '@/hooks';
import { T4MainContent } from '@/types';

import {
  T4ContactSection,
  T4CrosslinkedSection,
  T4FeaturedSection,
  T4OverviewSection,
  T4QuoteSection,
  T4TwoColumnsSection,
  T4TwoColumnsWithCarouselSection,
} from './sections';

const getSectionComponent = (content: T4MainContent) => {
  const {
    featured,
    club_contact,
    quote,
    two_column_entry_summaries,
    two_column_summaries_with_carousel,
    filtered_entry_summary_list,
    cross_linked_content,
  } = content;

  if (featured) {
    return <T4FeaturedSection data={featured} />
  }

  if (quote) {
    return <T4QuoteSection data={quote} />
  }

  if (two_column_summaries_with_carousel) {
    return <T4TwoColumnsWithCarouselSection data={two_column_summaries_with_carousel} />
  }

  if (two_column_entry_summaries) {
    return <T4TwoColumnsSection data={two_column_entry_summaries} />
  }

  if (club_contact) {
    return <T4ContactSection data={club_contact} />
  }

  if (filtered_entry_summary_list) {
    return null
  }

  if (cross_linked_content) {
    return <T4CrosslinkedSection data={cross_linked_content} />;
  }

  return <>
    <div>Unknown section</div>
  </>
}

export const FoodHome = () => {
  const { contentStack } = usePageProps();
  const { pageData } = contentStack;

  if (!pageData) { return <div>Error get data from server</div> }

  const isOverviewVisible = pageData.overview && pageData.overview.visible;

  return (
    <>
      <T4OverviewSection />

      {pageData.main_content
        .filter((content: any) => {
          const key = Object.keys(content)[0]
          return content[key].visible
        })
        .map((content: any, index: number) => {
          const { section_anchor = null } = content.filtered_entry_summary_list || {}

          const showDivider = index === 0 && !isOverviewVisible
            ? false
            : true

          return (
            <Fragment key={index}>
              {showDivider
                ? <div id={section_anchor} className="c-divider" />
                : <div id={section_anchor} className="c-divider c-divider--transparent c-divider--bottom" />}
              {getSectionComponent(content)}
            </Fragment>
          )
        })}
      <div className="c-divider c-divider--transparent c-divider--bottom" />
    </>
  )
}
