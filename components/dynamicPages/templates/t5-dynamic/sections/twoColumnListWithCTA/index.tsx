import React from 'react';

import { LinkComponent, CTAComponent, CardImageComponent } from '@/components';
import { usePageProps } from '@/hooks';
import { isPageAvailable } from '@/utils';
import { T5TwoColumnWithCTAMainContent } from '@/types';

export const T5TwoColumnListWithCTASection = ({ data }: any) => {
  const { isAuthorized } = usePageProps();

  if (!data) { return <div>Error get data from server</div> }

  const {
    column_1 = {},
    column_2 = {},
    cta,
    visible,
  }: T5TwoColumnWithCTAMainContent = data;

  if (!visible) { return null }

  const availableItems1 = (column_1.items || []).filter((item: any) => isPageAvailable(item, isAuthorized))
  const availableItems2 = (column_2.items || []).filter((item: any) => isPageAvailable(item, isAuthorized))

  return (
    <section data-testid='two column cta section'>
      <div className="p-template-5-crosslinked">
        <div className="p-template-5-crosslinked__2-columns">
          <div className="p-template-5-crosslinked__column-left">
            <h3 className="p-template-5-crosslinked__title" data-testid='two column cta title'>
              {column_1.title}
            </h3>

            <div className="p-template-5-crosslinked__content-cards">
              {availableItems1.map((item: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="p-template-5-crosslinked__content-card c-content-card c-content-card--simple c-content-card--medium"
                    data-testid='two column cta card'
                  >
                    <LinkComponent className="p-template-5-crosslinked__content-card-link c-content-card__link" link={item}>
                      <CardImageComponent
                        width={398}
                        height={265}
                        data={item.abstract?.thumbnail}
                      />
                    </LinkComponent>
                    <div className="p-template-5-crosslinked__content-card-container c-content-card__type-container">
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
            </div>
          </div>

          <div className="p-template-5-crosslinked__column-right">
            <h3 className="p-template-5-crosslinked__title" data-testid='two column cta right title'>
              {column_2.title}
            </h3>

            <div className="p-template-5-crosslinked__preview-cards">
              {availableItems2.map((item: any, index: number) => {
                return (
                  <div key={index} className="c-content-card c-content-card--preview" data-testid='two column cta right card'>
                    <LinkComponent className="c-content-card__link" link={item}>
                      <CardImageComponent
                        width={82}
                        height={82}
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
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <CTAComponent data={cta} />
      </div>
    </section>
  )
}
