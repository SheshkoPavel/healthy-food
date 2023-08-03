import React from 'react';

import { CardImageComponent, LinkComponent } from '@/components';

export const CarouselSlide = ({ item }: any) => {
  const categories = item.categories || [];

  return (
    <div className="p-template-4__featured-cards-mobile-carousel-slide c-carousel-mosaic--mobile__slide" data-testid={'mobile carousel slide'}>
      <div className="c-content-card c-content-card--vertical c-content-card--medium">
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

          <div className="c-content-card__type-tags">
            {categories.map(({ title }: any, i: number) => {
              return <React.Fragment key={i}>
                {i !== 0 && <span className="c-content-card__type-delimiter">&middot;</span>}
                <span key={i} className="c-content-card__type-tag c-link">
                  {title}
                </span>
              </React.Fragment>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
