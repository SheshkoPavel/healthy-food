import React from 'react';
import Image from 'next/image';

export const CarouselSlide = ({ item }: any) => {
  const {
    image,
    image_alt_text,
  } = item;

  return (
    <div className="c-carousel-mosaic--mobile__slide">
      <Image
        className="c-carousel__slide-image"
        width={542}
        height={542}
        src={image.url}
        alt={image_alt_text}
      />
    </div>
  )
}
