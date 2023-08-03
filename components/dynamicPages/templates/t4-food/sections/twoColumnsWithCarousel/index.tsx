import React from 'react';

import { MobileCarousel, useMobileCarousel, LinkComponent, RichText, CardImageComponent } from '@/components';
import { usePageProps } from '@/hooks';
import { isPageAvailable } from '@/utils';
import { T4TwoColumnSummariesWithCarouselMainContent } from '@/types';

import { CarouselSlide } from './carouselSlide';

export const T4TwoColumnsWithCarouselSection = ({ data }: any) => {
  const { isAuthorized } = usePageProps();

  const {
    carousel,
    link,
    subtitle,
    secondary_copy,
    summary_items,
    title,
    headline_copy,
    visible,
  }: T4TwoColumnSummariesWithCarouselMainContent = data;

  if (!visible) {
    return null;
  }
  const carouselItems = (carousel && carousel[0] && carousel[0].items) || [];
  const { onPrevClick, onNextClick, onChange, currentSlide, selectedItem } = useMobileCarousel(carouselItems)

  let availableItems;
  if (summary_items) {
    availableItems = summary_items.filter(item => isPageAvailable(item, isAuthorized))
  }

  return (
    <section data-testid='two columns carousel section'>
      <div className="p-template-4__2-columns">
        {/* column left */}
        <div className="p-template-4__2-columns-column">

          <div className="p-template-4__2-columns-column-headline">
            <div className="c-subsection">
              <div className="c-subsection__header">
                <h2 className="c-subsection__header-title" data-testid='two columns carousel title'>{title}</h2>
                <div className="c-subsection__header-description">
                  <RichText text={headline_copy} />
                </div>
              </div>
              <div className="c-subsection__headline">
                <h3 className="c-subsection__headline-subtitle" data-testid='two columns carousel subtitle'>{subtitle}</h3>
                <div className="c-subsection__headline-description" data-testid='two columns carousel description'>
                  <RichText text={secondary_copy} />
                </div>
                <LinkComponent
                  className="c-subsection__headline-link c-link c-link--icon"
                  link={link && link[0]}
                  titleProp="link_title"
                />
              </div>
            </div>
          </div>

          {availableItems && availableItems.length > 0 && <div className="p-template-4__2-columns-column-content-cards">
            {
              availableItems.map((item, index: number) => {
                return (
                  <div
                    key={index}
                    className="p-template-4__2-columns-column-content-cards-card c-content-card c-content-card--medium c-content-card--simple"
                    data-testid='two columns carousel card'
                  >
                    <LinkComponent className="c-content-card__link" link={item}>
                      <CardImageComponent
                        width={608}
                        height={405}
                        data={item.abstract?.thumbnail}
                      />
                    </LinkComponent>
                    <div className="p-template-4__2-columns-column-content-cards-card-container c-content-card__type-container">
                      <LinkComponent link={item} className="c-content-card__type-title-link">
                        <h3 className="c-content-card__type-title">{item.abstract?.title}</h3>
                      </LinkComponent>
                      <p className="c-content-card__type-body">
                        {item.abstract?.summary}
                      </p>
                      <LinkComponent className="c-content-card__cta-link c-link c-link--icon" link={item} titleProp='link_title' />
                    </div>
                  </div>
                )
              })
            }
          </div>}
        </div>

        {/* column right */}
        <div className="p-template-4__2-columns-column">
          {/* carousel-bordered, without container <div className="c-carousel-bordered__wrapper"> */}
          <div className="c-carousel c-carousel-bordered" data-testid='two columns carousel'>
            <MobileCarousel
              className="c-carousel-bordered__inner"
              selectedItem={selectedItem}
              onChange={onChange}
            >
              {carouselItems.map((item: any, index: number) => {
                return (
                  <CarouselSlide
                    key={index}
                    item={item}
                  />
                )
              })}
            </MobileCarousel>
            {carouselItems.length > 0 && (
              <div className="c-carousel__actions-wrapper">
                {/* on this template required className c-carousel__actions--constant-width */}
                <div className="c-carousel__actions c-carousel__actions--constant-width">
                  <div className="c-carousel__action c-carousel__action--prev" onClick={onPrevClick} />
                  <div className="c-carousel__status">
                    <div className="c-carousel__status-current">{currentSlide}</div>
                    <div className="c-carousel__status-divider">&#124;</div>
                    <div className="c-carousel__status-total">{carouselItems.length}</div>
                  </div>
                  <div className="c-carousel__action c-carousel__action--next" onClick={onNextClick} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
