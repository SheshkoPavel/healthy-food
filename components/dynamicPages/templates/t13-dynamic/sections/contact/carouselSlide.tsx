import React from 'react';

import { ImageComponent } from '@/components';
import { T13ItemCarouselContactInformation } from '@/types';

export const CarouselSlide = ({ item }: any) => {
  const {
    image,
    caption,
  }: T13ItemCarouselContactInformation = item;

  return (
    <div className="c-carousel-bordered__slide-wrapper" data-testid='contact carousel slide'>
      <div className="c-carousel-bordered__slide">
        <ImageComponent
          className="c-carousel__slide-image"
          width={576}
          height={864}
          data={image}
        />
      </div>
      <div className="c-carousel-bordered__slide-legend">
        {caption}
        <span className="c-carousel-bordered__slide-border" />
      </div>
    </div>
  )
}
