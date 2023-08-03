import React from 'react';

import { usePageProps } from '@/hooks';
import { ImageComponent, MobileCarousel, VideoPlayer, useMobileCarousel } from '@/components';
import { T4SectionLandingPageDynamic } from '@/types';

import { CarouselSlide } from './carouselSlide';

export const T4OverviewHero = () => {
  const { contentStack } = usePageProps();
  const { pageData } = contentStack;

  const {
    overview,
    overview: {
      visible,
    }
  }: T4SectionLandingPageDynamic = pageData;

  if (!visible || !overview.hero || !overview.hero[0]) { return null }
  const { mosaic_image = {}, hero = {}, video_link } = overview.hero[0];
  const { image_1, image_2, image_3, image_4, image_5 } = mosaic_image;
  const { image, logo } = hero;
  const images = [image_1, image_2, image_3, image_4, image_5].filter(item => item?.image);

  const { onPrevClick, onNextClick, onChange, currentSlide, selectedItem } = useMobileCarousel(images)

  return (
    <div className="p-template-4__overview-mosaic" data-testid='overview hero'>
      <div className="p-template-4__overview-mosaic-header">
        <div className="p-template-4__overview-mosaic-header-building">
          <ImageComponent
            className="p-template-4__overview-mosaic-image"
            width={1240}
            height={411}
            data={image}
            data-testid='overview main picture'
          />
        </div>
        {logo?.image && <div className="p-template-4__overview-mosaic-header-brand">
          <ImageComponent
            className="p-template-4__overview-mosaic-image"
            width={289}
            height={289}
            data={logo}
          />
        </div>}
      </div>

      {video_link && <div className="p-template-4-video">
        <VideoPlayer link={video_link} />
      </div>}

      {/* this container hide in mobile */}
      {mosaic_image && !video_link && <div className="p-template-4__overview-mosaic-images" data-testid='mosaic container'>
        <div className="p-template-4__overview-mosaic-images-col-1">
          <div className="p-template-4__overview-mosaic-images-item p-template-4__overview-mosaic-images-item--top-left">
            <ImageComponent
              className="p-template-4__overview-mosaic-image"
              width={391}
              height={391}
              data={image_1}
            />
          </div>
          <div className="p-template-4__overview-mosaic-images-item p-template-4__overview-mosaic-images-item--bottom-left">
            <ImageComponent
              className="p-template-4__overview-mosaic-image"
              width={184}
              height={184}
              data={image_2}
            />
          </div>
        </div>
        <div className="p-template-4__overview-mosaic-images-col-2">
          <div className="p-template-4__overview-mosaic-images-col-2-row">
            <div className="p-template-4__overview-mosaic-images-item p-template-4__overview-mosaic-images-item--top-center">
              <ImageComponent
                className="p-template-4__overview-mosaic-image"
                width={513}
                height={288}
                data={image_3}
              />
            </div>
            <div className="p-template-4__overview-mosaic-images-item p-template-4__overview-mosaic-images-item--top-right">
              <ImageComponent
                className="p-template-4__overview-mosaic-image"
                width={288}
                height={288}
                data={image_4}
              />
            </div>
          </div>
          <div className="p-template-4__overview-mosaic-images-col-2-row">
            <div className="p-template-4__overview-mosaic-images-item p-template-4__overview-mosaic-images-item--bottom-center">
              <ImageComponent
                className="p-template-4__overview-mosaic-image"
                width={391}
                height={391}
                data={image_5}
              />
            </div>
          </div>
        </div>
      </div>}

      {/* mobile carousel, displayed onle for mobile view */}
      {!video_link && images.length > 0 && <div className="p-template-4__overview-mosaic-carousel" data-testid='mosaic mobile carousel'>
        <div className="c-carousel c-carousel-mosaic--mobile c-carousel-mosaic--mobile-brand-right">
          <MobileCarousel
            className="c-carousel-mosaic--mobile__inner"
            selectedItem={selectedItem}
            onChange={onChange}
          >
            {images.map((item, index: number) => {
              return (
                <CarouselSlide
                  key={index}
                  item={item}
                />
              )
            })}
          </MobileCarousel>
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
        </div>

      </div>}

      {(mosaic_image.title || mosaic_image.title_copy) && !video_link && <div className="p-template-4__overview-mosaic-caption">
        <h3 className="p-template-4__overview-mosaic-caption-subtitle">
          {mosaic_image.title}
        </h3>
        <div className="p-template-4__overview-mosaic-caption-description">
          {mosaic_image.title_copy}
        </div>
      </div>}
    </div>
  )
}
