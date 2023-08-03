import React, { Fragment } from 'react';

import { usePageProps } from '@/hooks';
import { T5MainContent } from '@/types';

import {
  T5OverviewSection,
  T5ScheduleSection,
  T5StaffSection,
  T5TwoColumnSection,
  T5OneRowListSection,
  T5TwoColumnListWithCTASection,
} from './sections';

const getSectionComponent = (content: T5MainContent) => {
  const {
    staff,
    schedule,
    one_row,
    two_column,
    two_column_with_cta,
  } = content;

  if (schedule) {
    return <T5ScheduleSection data={schedule} />
  }

  if (staff) {
    return <T5StaffSection data={staff} />
  }

  if (two_column) {
    return <T5TwoColumnSection data={two_column} />
  }

  if (one_row) {
    return <T5OneRowListSection data={one_row} />
  }

  if (two_column_with_cta) {
    return <T5TwoColumnListWithCTASection data={two_column_with_cta} />
  }

  // if (quote) {
  //   return <T4QuoteSection data={quote} />
  // }

  // if (two_column_summaries_with_carousel) {
  //   return <T4TwoColumnsWithCarouselSection data={two_column_summaries_with_carousel} />
  // }

  // if (two_column_entry_summaries) {
  //   return <T4TwoColumnsSection data={two_column_entry_summaries} />
  // }

  // if (club_contact) {
  //   return <T4ContactSection data={club_contact} />
  // }

  // if (filtered_entry_summary_list) {
  //   return <T4ListingSection data={filtered_entry_summary_list} />;
  // }

  // if (cross_linked_content) {
  //   return <T4CrosslinkedSection data={cross_linked_content} />;
  // }

  return <>
    <div>Unknown section</div>
  </>
}

export const TemplateT5Dynamic = () => {
  const { contentStack } = usePageProps();
  const { pageData } = contentStack;

  if (!pageData) { return <div>Error get data from server</div> }

  const isOverviewVisible = pageData.overview && pageData.overview.visible;

  return (
    <>
      <div className='c-divider c-divider--transparent c-divider--top' />
      <T5OverviewSection />

      {pageData.main_content
        .filter((content: any) => {
          const key = Object.keys(content)[0]
          return content[key].visible
        })
        .map((content: any, index: number) => {

          const showDivider = index === 0 && !isOverviewVisible
            ? false
            : true

          const isOneRowSection = content.one_row;
          const isTwoColumnListSection = content.two_column_with_cta;

          return (
            <Fragment key={index}>
              {showDivider
                ? (isOneRowSection || isTwoColumnListSection)
                  ? <div className="c-divider c-divider--transparent c-divider--bottom" />
                  : <div className="c-divider" />
                : <div className="c-divider c-divider--transparent c-divider--bottom" />}
              {getSectionComponent(content)}
            </Fragment>
          )
        })}
      <div className="c-divider c-divider--transparent c-divider--bottom" />
    </>
  )
}
