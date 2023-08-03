import React from 'react';

import { CardImageComponent, LinkComponent } from '@/components';

export const List = ({ title, items }: any) => {
  return (
    <div className="c-carousel-computed-full">
      <div className="c-carousel-computed-full__header">
        <h3 className="c-carousel-computed-full__title">{title || ''}</h3>
      </div>
      <div className="c-carousel-computed-full__body">
        <div className="c-carousel-computed-full__slides">
          {items.map((item: any, index: number) => {
            return (
              <div key={index} className="c-content-card c-content-card--vertical c-content-card--medium">
                <LinkComponent link={item}>
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
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
