import React from 'react';
import Link from 'next/link';

import {
  useMobileCarousel,
  CardImageComponent,
  LinkComponent,
  CTAComponent,
  RichText,
  MobileCarousel,
} from '@/components';
import { usePageProps } from '@/hooks';
import { isPageAvailable } from '@/utils';
import { T4FeaturedMainContent } from '@/types';

import { CarouselSlide } from './carouselSlide';

export const T4FeaturedSection = (props: any) => {
  const { isAuthorized } = usePageProps();

  const { data } = props;

  const {
    cta,
    items,
    title,
    headline_copy,
    visible,
    links = [],
  }: T4FeaturedMainContent = data;

  if (!visible) { return null }

  const availableItems = (items || []).filter(item => isPageAvailable(item, isAuthorized))

  const { onPrevClick, onNextClick, onChange, currentSlide, selectedItem } = useMobileCarousel(availableItems)

  return (
    <>
      <section data-testid='featured section'>
        <div className="p-template-4__featured">
          <h3 className="p-template-4__featured-title" data-testid='featured title'>{title}</h3>
          <div className="p-template-4__featured-description" data-testid='featured description'>
            {headline_copy && <div className="p-template-4__featured-type">
              <RichText text={headline_copy} />
            </div>}

            <div className="p-template-4__featured-links">
              {
                links.map((link, index) => {
                  return (
                    link.href && <Link key={index} href={link.href} className="p-template-4__featured-link c-link">
                      {link.title}
                    </Link>
                  )
                })
              }
            </div>
          </div>

          <div className="p-template-4__featured-cards">
            {
              availableItems.map((item, index: number) => {
                const categories = item.categories || [];
                return (
                  <div
                    key={index}
                    className="c-content-card c-content-card--vertical c-content-card--medium"
                    data-testid='featured card'
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
                        {categories.map(({ title }, i: number) => {
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

          {/* mobile carousel with cards, displayed only for mobile view */}
          <div className="p-template-4__featured-cards-mobile">
            <div className="p-template-4__featured-cards-mobile-carousel c-carousel c-carousel-mosaic--mobile c-carousel-mosaic--mobile-brand-right">
              <MobileCarousel
                className="p-template-4__featured-cards-mobile-carousel-inner c-carousel-mosaic--mobile__inner"
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
