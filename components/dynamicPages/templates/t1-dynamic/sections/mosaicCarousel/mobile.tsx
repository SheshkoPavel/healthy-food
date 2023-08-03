import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { ImageComponent, useMobileCarousel, MobileCarousel as MobileCarouselComponent } from '@/components';

const CarouselSlide = ({ image }: any) => {
  return (
    <div className="c-carousel-mosaic--mobile__slide" data-testid='carousel slide'>
      <ImageComponent
        className="c-carousel__slide-image"
        width={342}
        height={342}
        data={image}
      />
    </div>
  )
}

export const MobileCarousel = ({ slides }: any) => {
  const images = slides.reduce((acc: any, slide: any) => {
    acc.push(slide.image_1);
    acc.push(slide.image_2);
    acc.push(slide.image_3);
    acc.push(slide.image_4);
    acc.push(slide.image_5);
    acc.push(slide.image_6);
    return acc;
  }, [])

  const { onPrevClick, onNextClick, onChange, currentSlide, selectedItem } = useMobileCarousel(images)

  return (
    <>
      <MobileCarouselComponent
        className="c-carousel-mosaic--mobile__inner"
        selectedItem={selectedItem}
        onChange={onChange}
      >
        {images.map((image: any, index: number) => {
          return (
            <CarouselSlide key={index} image={image} />
          )
        })}
      </MobileCarouselComponent>
      <div className="c-carousel__actions-wrapper">
        <div className="c-carousel__actions">
          <div className="c-carousel__action c-carousel__action--prev" onClick={onPrevClick} />
          <div className="c-carousel__status">
            <div className="c-carousel__status-current">{currentSlide}</div>
            <div className="c-carousel__status-divider">&#124;</div>
            <div className="c-carousel__status-total">{images.length}</div>
          </div>
          <div className="c-carousel__action c-carousel__action--next" onClick={onNextClick} />
        </div>
      </div>
    </>
  )
}
