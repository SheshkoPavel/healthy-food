import React from 'react';
import { ImageComponent } from '@/components';

export const CarouselSlide = ({ item }: any) => {
  const {
    image,
    caption,
  } = item;

  return (
    <div className="c-carousel-bordered__slide-wrapper" data-testid='mobile carousel slide'>
      <div className="c-carousel-bordered__slide">
        <ImageComponent
          className="c-carousel__slide-image"
          width={576}
          height={864}
          data={image}
        />
      </div>
      {caption && <div className="c-carousel-bordered__slide-legend">
        {caption}
        <span className="c-carousel-bordered__slide-border" />
      </div>
      }
    </div>
  )
}
