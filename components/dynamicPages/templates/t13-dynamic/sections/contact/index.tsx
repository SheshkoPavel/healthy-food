import React from 'react';
import Link from 'next/link';

import { T13ContactInformationMainContent } from '@/types';
import { MobileCarousel, useMobileCarousel } from '@/components/carousels';
import { RichText } from '@/components/richText';

import { CarouselSlide } from './carouselSlide';

export const T13ContactSection = ({ data }: any) => {
  const {
    visible,
    title,
    item = [],
    carousel,
    cta,
  }: T13ContactInformationMainContent = data;

  if (!visible) { return null }

  const carouselItems = (carousel && carousel[0] && carousel[0].items) || [];
  const { onPrevClick, onNextClick, onChange, currentSlide, selectedItem } = useMobileCarousel(carouselItems)

  return (
    <>
      <section data-testid='contact section'>
        <div className="p-template-13-2-columns__columns p-template-13-2-columns__columns--mobile-gap-64">
          <div className="p-template-13-2-columns__column">
            {/* borderedCarousel */}
            <div className="c-carousel c-carousel-bordered">
              <MobileCarousel
                className="c-carousel-bordered__inner"
                selectedItem={selectedItem}
                onChange={onChange}
              >
                {carouselItems.map((item, index: number) => {
                  return (
                    <CarouselSlide
                      key={index}
                      item={item}
                    />
                  )
                })}
              </MobileCarousel>

              {
                carouselItems.length > 0 && (
                  <div className="c-carousel__actions-wrapper">
                    <div className="c-carousel__actions">
                      <div className="c-carousel__action c-carousel__action--prev" onClick={onPrevClick} />
                      <div className="c-carousel__status">
                        <div className="c-carousel__status-current">{currentSlide}</div>
                        <div className="c-carousel__status-divider">&#124;</div>
                        <div className="c-carousel__status-total">{carouselItems.length}</div>
                      </div>
                      <div className="c-carousel__action c-carousel__action--next" onClick={onNextClick} />
                    </div>
                  </div>
                )
              }

            </div>
          </div>

          <div className="p-template-13-2-columns__column p-template-13-2-columns__column--right-gap-48">
            <div className="c-contact-information c-contact-information--vertical">
              <div className="c-contact-information__title">{title}</div>
              <div className="c-contact-information__type-wrapper">
                {item.map((contact, index: number) => {
                  const {
                    email_address,
                    name,
                    phone_number,
                    role,
                  } = contact;

                  return (
                    <div className="c-contact-information__section" key={index} data-testid='contact'>
                      <div className="c-contact-information__person">
                        {name && <div className="c-contact-information__name">{name}</div>}
                        {role && <div className="c-contact-information__position">{role}</div>}
                      </div>
                      {phone_number && <Link
                        className="c-contact-information__phone c-link"
                        href={`tel:${phone_number}`}
                      >
                        {phone_number}
                      </Link>}
                      {email_address && <Link
                        className="c-contact-information__email c-link c-link--icon-reverse c-link--icon-reverse-email"
                        href={`mailto:${email_address}`}
                        target="_blank"
                        data-testid='contact email'
                      >
                        {email_address}
                      </Link>}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="p-template-13-2-columns__content-cards-wrapper">
              {cta?.map((item, index: number) => {
                return (
                  <div key={index} className="c-subsection__headline" data-testid='contact cta'>
                    <h3 className="c-subsection__headline-subtitle">{item.primary}</h3>
                    <div className="c-subsection__headline-description">
                      <RichText text={item.primary_copy} />
                    </div>
                    {item.file && <Link
                      href={item.file.url}
                      className="c-subsection__headline-link c-link c-link--icon c-link--icon-download"
                      target='_blank'
                    >Download</Link>}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
