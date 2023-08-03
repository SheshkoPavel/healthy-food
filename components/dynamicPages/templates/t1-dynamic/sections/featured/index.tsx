import React from 'react';

import { LinkComponent, CardImageComponent } from '@/components';
import { CTAComponent } from '@/components/cta';
import { usePageProps } from '@/hooks';
import { isPageAvailable } from '@/utils';
import { T1FeaturedMainContent } from '@/types';

export const T1FeaturedSection = ({ data }: any) => {
  const { isAuthorized } = usePageProps();

  const {
    visible,
    items = [],
    cta,
  }: T1FeaturedMainContent = data;

  if (!visible) { return null }

  const availableItems = items.filter(item => isPageAvailable(item, isAuthorized))

  return (
    <>
      <section>
        <div className="p-template-1__cards" data-testid='featured section'>
          {
            (availableItems).map((item, index: number) => {
              return (
                <div
                  key={index}
                  className="p-template-1__cards-content-card c-content-card c-content-card--simple c-content-card--vertical c-content-card--medium"
                  data-testid="content card"
                >
                  <LinkComponent className="c-content-card__link" link={item}>
                    <CardImageComponent
                      width={396}
                      height={295}
                      data={item.abstract?.thumbnail}
                    />
                  </LinkComponent>
                  <div className="c-content-card__type-container">
                    <LinkComponent className="c-content-card__type-title-link" link={item}>
                      <h3 className="p-template-1__cards-content-card-title c-content-card__type-title">
                        {item.abstract?.title}
                      </h3>
                    </LinkComponent>
                    <p className="p-template-1__cards-content-card-body c-content-card__type-body">
                      {item.abstract?.summary}
                    </p>
                    <LinkComponent link={item} className="c-content-card__cta-link c-link c-link--icon">
                      {item.abstract?.link_title}
                    </LinkComponent>
                    <div className="c-content-card__type-tags"/>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
      <section data-testid='featured cta'>
        <CTAComponent data={cta} className={'p-template-1__cta c-cta'} />
      </section>
    </>
  )
}
