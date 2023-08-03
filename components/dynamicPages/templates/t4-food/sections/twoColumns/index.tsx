import React from 'react';

import { CTAComponent, RichText, LinkComponent, CardImageComponent } from '@/components';
import { usePageProps } from '@/hooks';
import { isPageAvailable } from '@/utils';
import { T4TwoColumnEntrySummariesMainContent } from '@/types';

export const T4TwoColumnsSection = ({ data }: any) => {

  const { isAuthorized } = usePageProps();

  const {
    cta,
    link = [],
    subtitle,
    secondary_copy,
    summary_items = [],
    title,
    headline_copy,
    visible,
  }: T4TwoColumnEntrySummariesMainContent = data;
  if (!visible) { return null }

  const availableItems = summary_items.filter(item => isPageAvailable(item, isAuthorized))

  return (
    <>
      <section data-testid='two columns cards section'>
        <div className="p-template-4__2-columns p-template-4__2-columns--gap-free h-margin-t-16">
          {/* column left, add className p-template-4__2-columns-column--left */}
          <div className="p-template-4__2-columns-column p-template-4__2-columns-column--left">
            <div className="p-template-4__2-columns-column-headline">
              <div className="c-subsection">
                <div className="c-subsection__header">
                  <h2 className="c-subsection__header-title" data-testid='two columns cards title'>{title}</h2>
                  <div className="c-subsection__header-description" data-testid='two columns cards description'>
                    <RichText text={headline_copy} />
                  </div>
                </div>
                <div className="c-subsection__headline">
                  <h3 className="c-subsection__headline-subtitle" data-testid='two columns cards subtitle'>{subtitle}</h3>
                  <div className="c-subsection__headline-description">
                    <RichText text={secondary_copy} />
                  </div>
                  <LinkComponent
                    className="c-subsection__headline-link c-link c-link--icon"
                    link={link[0]}
                    titleProp="link_title"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="p-template-4__2-columns-column p-template-4__2-columns-column--right">
            {availableItems.length > 0 && <div className="p-template-4__2-columns-column-content-cards p-template-4__2-columns-column-content-cards--transparent">
              {
                availableItems.map((item, index: number) => {
                  return (
                    <div
                      key={index}
                      className="p-template-4__2-columns-column-content-cards-card c-content-card c-content-card--medium c-content-card--simple"
                      data-testid='two columns card'
                    >
                      <LinkComponent className="c-content-card__link" link={item}>
                        <CardImageComponent
                          width={608}
                          height={405}
                          data={item.abstract?.thumbnail}
                        />
                      </LinkComponent>
                      <div className="p-template-4__2-columns-column-content-cards-card-container c-content-card__type-container">
                        <LinkComponent className="c-content-card__type-title-link" link={item}>
                          <h3 className="c-content-card__type-title">{item.abstract?.title}</h3>
                        </LinkComponent>
                        <p className="c-content-card__type-body">
                          {item.abstract?.summary}
                        </p>
                        <LinkComponent className="c-content-card__cta-link c-link c-link--icon" link={item} titleProp='link_title' />
                      </div>
                    </div>
                  )
                })
              }
            </div>}
          </div>

        </div>
        <CTAComponent data={cta} className={'c-cta h-margin-t-12'} />
      </section>
    </>
  )
}
