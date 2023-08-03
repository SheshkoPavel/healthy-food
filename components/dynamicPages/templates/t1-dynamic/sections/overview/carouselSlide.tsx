import React from 'react';

import { ImageComponent } from '@/components';

import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import Link from 'next/link';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { ImageWithAltText } from '@/types';

interface SimpleCarouselData {
  items?: any[];
}

interface CarouselSlideData {
  item: {
    image: ImageWithAltText;
    video_link: string;
  };
  isPrevious?: boolean;
  isSelected?: boolean;
}

const ReactPlayerComponent = (props: any) => {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    setShouldRender(true)
  }, [])

  return shouldRender
    ? <ReactPlayer {...props} />
    : <Link href={props.url}/>
}

export const CarouselSlide = ({ item, isSelected }: any) => {
  const {
    image,
    video_link,
  } = item;

  if (video_link) {
    return (
      <div className='player-wrapper p-template-1__overview-carousel-slide c-carousel-simple__slide'>
        <ReactPlayerComponent
          className='react-player c-carousel__slide-image'
          url={video_link} //https://vimeo.com/524933864
          playing={isSelected}
          muted={true}
          loop={true}
          width={'100%'}
          height={'100%'}
        // controls={true}
        // config={{   //we can config player for existing striming video service like vimeo, youtube, etc
        //   vimeo:{
        //     title: 'test',
        //     playerOptions: {
        //       // responsive: true,
        //     }
        //   }
        // }}
        />
      </div>
    )
  }

  return (
    <div className="p-template-1__overview-carousel-slide c-carousel-simple__slide">
      <ImageComponent
        className="c-carousel__slide-image"
        width={1376}
        height={590}
        data={image}
        priority
      />
    </div>
  )
}
