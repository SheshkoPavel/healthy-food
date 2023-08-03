import React from 'react';

import { CTAComponent, LinkComponent, CardImageComponent } from '@/components';
import { usePageProps } from '@/hooks';
import { isPageAvailable } from '@/utils';
import { T4CrossLinkedContentMainContent } from '@/types';

export const T4CrosslinkedSection = ({ data }: any) => {
  const { isAuthorized } = usePageProps();

  const {
    visible,
    item = [],
    cta,
  }: T4CrossLinkedContentMainContent = data;

  if (!visible) { return null }
  const availableItems = item.filter(item => isPageAvailable(item, isAuthorized))

  return (
    <>
      <section data-testid='crosslinked section'>
        <div className="p-template-4__content-cards">
          {availableItems.map((item, index: number) => {
            return (
              <div
                key={index}
                className="p-template-4__content-cards-content-card c-content-card c-content-card--simple"
                data-testid='crosslinked cards'
              >
                <LinkComponent className="c-content-card__link" link={item}>
                  <CardImageComponent
                    width={608}
                    height={405}
                    data={item.abstract?.thumbnail}
                  />
                </LinkComponent>

                <div className="c-content-card__type-container">
                  <LinkComponent className="c-content-card__type-title-link" link={item}>
                    <h3 className="c-content-card__type-title">{item.abstract?.title}</h3>
                  </LinkComponent>
                  <p className="c-content-card__type-body">
                    {item.abstract?.summary}
                  </p>
                  <LinkComponent link={item} className="c-content-card__cta-link c-link c-link--icon">
                    {item.abstract?.link_title}
                  </LinkComponent>
                </div>
              </div>
            )
          })}

          {/* cta */}
          {<div className="p-template-4__content-card-cta" data-testid='crosslinked cta'>
            <CTAComponent data={cta} />
          </div>}
        </div>
      </section>
    </>
  )
}
