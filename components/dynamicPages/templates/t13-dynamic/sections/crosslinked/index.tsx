import React from 'react';

import { CTAComponent, CardImageComponent, LinkComponent } from '@/components';
import { isPageAvailable } from '@/utils';
import { usePageProps } from '@/hooks';
import { T13CrossLinkedContentMainContent } from '@/types';

export const T13CrosslinkedSection = ({ data }: any) => {
  const { isAuthorized } = usePageProps();
  const {
    visible,
    title,
    items = [],
    cta,
  }: T13CrossLinkedContentMainContent = data;

  if (!visible) { return null }

  const availableItems = items.filter(item => isPageAvailable(item, isAuthorized));

  return (
    <>
      <section data-testid='crosslinked section'>
        <div className="p-template-13-crosslinked">

          <h3 className="p-template-13-crosslinked__title" data-testid='crosslinked title'>
            {title}
          </h3>

          <div className="p-template-13-crosslinked__content-cards">
            {
              availableItems.map((el, index: number) => {
                return (
                  <div
                    key={index}
                    className="p-template-13-crosslinked__content-card c-content-card c-content-card--simple c-content-card--medium c-content-card--vertical"
                    data-testid='crosslinked card'
                  >
                    <LinkComponent className="c-content-card__link" link={el}>
                      <CardImageComponent
                        width={398}
                        height={265}
                        data={el.abstract?.thumbnail}
                      />
                    </LinkComponent>
                    <div className="c-content-card__type-container">
                      <LinkComponent className="c-content-card__type-title-link" link={el}>
                        <h3 className="c-content-card__type-title">{el.abstract?.title}</h3>
                      </LinkComponent>
                      <p className="c-content-card__type-body">
                        {el.abstract?.summary}
                      </p>
                      <LinkComponent className="c-content-card__cta-link c-link c-link--icon" link={el}>
                        {el.abstract?.link_title}
                      </LinkComponent>
                    </div>
                  </div>
                )
              })
            }

          </div>

          <CTAComponent data={cta} />

        </div>
      </section>
    </>
  )
}
