import React from 'react';

import { usePageProps } from '@/hooks';
import { MobileCarousel, useMobileCarousel } from '@/components';
import { CarouselSlide } from './carouselSlide';
import { T1PublicFacingHomeDynamic } from '@/types';

export const T1OverviewSection = () => {
  const { contentStack } = usePageProps();
  const { pageData } = contentStack;

  if (!pageData) { return <div>Error get data from server</div> }

  const {
    overview,
    overview: {
      visible,
      carousel_with_video = [],
    },
  }: T1PublicFacingHomeDynamic = pageData;

  if (!visible) { return null }

  const items = (carousel_with_video[0] && carousel_with_video[0].items) || [];

  const { onPrevClick, onNextClick, onChange, currentSlide, selectedItem } = useMobileCarousel(items)

  return (
    <section>
      <div className="p-template-1__overview" data-testid='carousel section'>
        <div className="p-template-1__overview-carousel c-carousel c-carousel-simple">
          <MobileCarousel
            className="c-carousel-simple__inner"
            selectedItem={selectedItem}
            onChange={onChange}
          >
            {items.map((item, index: number) => {
              return (
                <CarouselSlide
                  key={index}
                  item={item}
                />
              )
            })}
          </MobileCarousel>
          {items.length && <div className="c-carousel__actions-wrapper">
            <div className="c-carousel__actions">
              <div className="c-carousel__action c-carousel__action--prev" onClick={onPrevClick} />
              <div className="c-carousel__status">
                <div className="c-carousel__status-current">{currentSlide}</div>
                <div className="c-carousel__status-divider">&#124;</div>
                <div className="c-carousel__status-total">{items.length}</div>
              </div>
              <div className="c-carousel__action c-carousel__action--next" onClick={onNextClick} />
            </div>
          </div>}
        </div>
      </div>
    </section>
  )
}
