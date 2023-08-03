import React from 'react';

import { usePageProps } from '@/hooks';
import {
  MobileCarousel,
  useMobileCarousel,
  CardImageComponent,
  LinkComponent,
  CTAComponent,
} from '@/components';
import { isPageAvailable } from '@/utils';
import { T4FilteredEntrySummaryListMainContent } from '@/types';

import { CarouselSlide } from './carouselSlide';

export const T4ListingSection = ({ data }: any) => {
  const { isAuthorized } = usePageProps();

  if (!data) { return <div>Error get data from server</div> }

  const {
    title,
    visible,
    items = [],
    cta,
  }: T4FilteredEntrySummaryListMainContent = data;

  if (!visible) { return null }

  const availableItems = (items || []).filter(item => isPageAvailable(item, isAuthorized))
  const { onPrevClick, onNextClick, onChange, currentSlide, selectedItem } = useMobileCarousel(availableItems)

  return (
    <>
      <section data-testid='listing section'>
        <div className="p-template-4__listing">
          <h3 className="p-template-4__listing-title" data-testid='listing title'>{title}</h3>
          <div className="p-template-4__listing-container">
            {
              availableItems.map((item, index: number) => {
                const categories = item.categories || [];
                return (
                  <div
                    key={index}
                    className="p-template-4__listing-card c-content-card c-content-card--vertical c-content-card--medium"
                    data-testid='listing card'
                  >
                    <LinkComponent className="c-content-card__link" link={item}>
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
                      <div className="c-content-card__type-tags">
                        {categories.map(({ title }: any, i: number) => {
                          return <React.Fragment key={i}>
                            {i !== 0 && <span className="c-content-card__type-delimiter">&middot;</span>}
                            <span key={i} className="c-content-card__type-tag c-link">
                              {title}
                            </span>
                          </React.Fragment>
                        })}
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          {/* listing -> carousel for mobile view */}
          <div className="p-template-4__listing-mobile">
            <div className="p-template-4__listing-mobile-carousel c-carousel c-carousel-mosaic--mobile c-carousel-mosaic--mobile-brand-right">
              <MobileCarousel
                className="p-template-4__listing-mobile-carousel-inner c-carousel-mosaic--mobile__inner"
                selectedItem={selectedItem}
                onChange={onChange}
              >
                {availableItems.map((item, index: number) => {
                  return (
                    <CarouselSlide
                      key={index}
                      item={item}
                    />
                  )
                })}
              </MobileCarousel>
              {availableItems.length && <div className="c-carousel__actions-wrapper">
                <div className="c-carousel__actions">
                  <div className="c-carousel__action c-carousel__action--prev" onClick={onPrevClick} />
                  <div className="c-carousel__status">
                    <div className="c-carousel__status-current">{currentSlide}</div>
                    <div className="c-carousel__status-divider">&#124;</div>
                    <div className="c-carousel__status-total">{availableItems.length}</div>
                  </div>
                  <div className="c-carousel__action c-carousel__action--next" onClick={onNextClick} />
                </div>
              </div>}
            </div>
          </div>

          <CTAComponent data={cta} />

        </div>
      </section>
    </>
  )
}
