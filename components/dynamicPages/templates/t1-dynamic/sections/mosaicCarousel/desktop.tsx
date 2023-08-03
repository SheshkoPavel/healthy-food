import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { ImageComponent, MobileCarousel, useMobileCarousel } from '@/components';

const CarouselSlide = ({ slide }: any) => {
  return (
    <div className="p-template-1__carousel-mosaic-slide c-carousel-mosaic__slide">
      <div className="c-carousel-mosaic__row-1">
        <div className="c-carousel-mosaic__item c-carousel-mosaic__item--left-top">
          <div className="c-carousel-mosaic__item-building">
            <ImageComponent
              className="c-carousel__slide-image"
              width={446}
              height={446}
              data={slide.image_1}
            />
          </div>
          {/* <div className="c-carousel-mosaic__item-brand">
            <ImageComponent
              className="c-carousel__slide-image"
              width={289}
              height={289}
              data={images_for_decoration.logo}
            />
          </div> */}
        </div>
        <div className="c-carousel-mosaic__item c-carousel-mosaic__item--center-top">
          <ImageComponent
            className="c-carousel__slide-image"
            width={446}
            height={446}
            data={slide.image_2}
          />
        </div>
        <div className="c-carousel-mosaic__item c-carousel-mosaic__item--right-top">
          <ImageComponent
            className="c-carousel__slide-image"
            width={301}
            height={301}
            data={slide.image_3}
          />
        </div>
      </div>
      <div className="c-carousel-mosaic__row-2">
        <div className="c-carousel-mosaic__item c-carousel-mosaic__item--left-bottom">
          <ImageComponent
            className="c-carousel__slide-image"
            width={186}
            height={186}
            data={slide.image_4}
          />
        </div>
        <div className="c-carousel-mosaic__item c-carousel-mosaic__item--center-bottom">
          <ImageComponent
            className="c-carousel__slide-image"
            width={398}
            height={398}
            data={slide.image_5}
          />
        </div>
        <div className="c-carousel-mosaic__item c-carousel-mosaic__item--right-bottom">
          <ImageComponent
            className="c-carousel__slide-image"
            width={501}
            height={282}
            data={slide.image_6}
          />
        </div>
      </div>
    </div>
  )
}

export const DesktopCarousel = ({ slides }: any) => {
  const { onPrevClick, onNextClick, onChange, currentSlide, selectedItem } = useMobileCarousel(slides)

  return (
    <>
      <MobileCarousel
        className="c-carousel-mosaic__inner"
        selectedItem={selectedItem}
        onChange={onChange}
      >
        {slides.map((slide: any, index: number) => {
          return (
            <CarouselSlide key={index} slide={slide} />
          )
        })}
      </MobileCarousel>
      <div className="c-carousel__actions-wrapper c-carousel__actions-wrapper--mosaic">
        <div className="c-carousel__actions">
          <div className="c-carousel__action c-carousel__action--prev" onClick={onPrevClick} />
          <div className="c-carousel__status">
            <div className="c-carousel__status-current">{currentSlide}</div>
            <div className="c-carousel__status-divider">&#124;</div>
            <div className="c-carousel__status-total">{slides.length}</div>
          </div>
          <div className="c-carousel__action c-carousel__action--next" onClick={onNextClick} />
        </div>
      </div>
    </>
  )
}
