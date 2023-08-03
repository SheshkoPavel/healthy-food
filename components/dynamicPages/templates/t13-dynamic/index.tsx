import React, { Fragment } from 'react';

import { useIsMobile, usePageProps } from '@/hooks';
import { T13MainContent } from '@/types';

import {
  T13OverviewSection,
  T13TwoColumnSection,
  T13ContactSection,
  T13CrosslinkedSection,
  T13MenuSection,
} from './sections';

const getSectionComponent = (content: T13MainContent) => {
  const {
    two_column,
    contact_information,
    menu,
    cross_linked_content,
  } = content;

  if (two_column) {
    return <T13TwoColumnSection data={two_column} />
  }
  if (contact_information) {
    return <T13ContactSection data={contact_information} />
  }
  if (cross_linked_content) {
    return <T13CrosslinkedSection data={cross_linked_content} />
  }
  if (menu) {
    return <T13MenuSection data={menu} />
  }

  return <>
    <div>Unknown section</div>
  </>
}

export const TemplateT13Dynamic = () => {
  const { contentStack } = usePageProps();
  const { pageData } = contentStack;
  const isMobile = useIsMobile(768);

  if (!pageData) { return <div>Error get data from server</div> }

  const isOverviewVisible = pageData.overview && pageData.overview.visible;

  return (
    <>
      {isOverviewVisible && <div className='c-divider c-divider--transparent c-divider--top' />}
      {isOverviewVisible && <T13OverviewSection />}
      {isOverviewVisible && <div className={isMobile ? 'c-divider' : 'c-divider c-divider--transparent c-divider--decreased'} />}

      {pageData.main_content
        .filter((content: any) => {
          const key = Object.keys(content)[0]
          return content[key].visible
        })
        .map((content: any, index: number) => {
          const isMenuSection = content.menu;
          const isCrosslinkedSection = content.cross_linked_content;

          let dividerClassName = 'c-divider';
          if (isMenuSection && isMobile) {
            dividerClassName = 'c-divider c-divider--transparent c-divider--decreased';
          }
          if (isCrosslinkedSection && isMobile) {
            dividerClassName = 'c-divider c-divider--transparent c-divider--decreased';
          }

          const showDivider = index === 0
            ? false
            : true

          return (
            <Fragment key={index}>
              {showDivider
                ? <div className={dividerClassName} />
                : null
              }
              {getSectionComponent(content)}
            </Fragment>
          )
        })}
      <div className="c-divider c-divider--transparent c-divider--bottom" />
    </>
  )
}
