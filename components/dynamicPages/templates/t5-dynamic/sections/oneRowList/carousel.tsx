import React from 'react';

import { useComputedCarousel, CardImageComponent, LinkComponent } from '@/components';

export const Carousel = ({ title, items = [] }: any) => {

  const {
    carouselWrapperRef,
    carouselRef,
    onPrevClick,
    onNextClick,
  } = useComputedCarousel(items);

  return (
    <div className="c-carousel-computed">
      <div className="c-carousel-computed__header">
        <h3 className="c-carousel-computed__title">{title || ''}</h3>
      </div>
      <div className="c-carousel-computed__body" ref={carouselWrapperRef}>
        <div className="c-carousel-computed__slides" ref={carouselRef}>
          {items.map((item: any, index: number) => {
            return (
              <div key={index} className="c-carousel-computed__slide">
                <div className="c-content-card c-content-card--vertical c-content-card--medium">
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
              </div>
            )
          })}
        </div>
      </div>
      <div className="c-carousel__actions-wrapper c-carousel__actions-wrapper-computed">
        <div className="c-carousel__actions c-carousel__actions-computed ">
          <div className="c-carousel__action c-carousel__action--prev" onClick={onPrevClick} />
          <div className="c-carousel__action c-carousel__action--next" onClick={onNextClick} />
        </div>
      </div>
    </div>
  )
}
