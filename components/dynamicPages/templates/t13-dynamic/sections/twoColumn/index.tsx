import React, { Fragment } from 'react';

import { T13TwoColumnMainContent } from '@/types';
import { RichText } from '@/components/richText';
import { ImageComponent } from '@/components/imageComponent';
import { CTAComponent } from '@/components/cta';

export const T13TwoColumnSection = ({ data }: any) => {
  const {
    visible,
    column_1,
    column_2,
    cta,
  }: T13TwoColumnMainContent = data;

  if (!visible) { return null }

  return (
    <>
      <section data-testid='two column section'>
        <div className="p-template-13-2-columns__columns">
          <div className="p-template-13-2-columns__column p-template-13-2-columns__column--left">
            <div className="c-subsection">
              <div className="c-subsection__header">
                <h2 className="c-subsection__header-title" data-testid='two column title'>{column_1.title}</h2>
                <div className="c-subsection__header-description" data-testid='two column description'>
                  <RichText text={column_1.headline_copy} />
                </div>
              </div>
              {/* <div className="c-subsection__headline">
                <h3 className="c-subsection__headline-subtitle">Subsection Headline</h3>
                <p className="c-subsection__headline-description">Lorem ipsum dolor sit amet consectetur adipiscing elit in at pulvinar.</p>
                <a href={'#'} className="c-subsection__headline-link c-link c-link--icon">
                  Button
                </a>
              </div> */}
            </div>

            <div className="c-image" data-testid='two column image left'>
              <div className="c-image__wrapper">
                <ImageComponent
                  className="c-image__image"
                  width={576}
                  height={864}
                  data={column_1.image}
                />
              </div>
            </div>
          </div>

          <div className="p-template-13-2-columns__column p-template-13-2-columns__column--right">
            <div className="c-image" data-testid='two column image right'>
              <div className="c-image__wrapper c-image__wrapper--square">
                <ImageComponent
                  className="c-image__image"
                  width={608}
                  height={608}
                  data={column_2.image}
                />
              </div>
              <div className="p-template-13-2-columns__image-caption c-caption" data-testid='two column caption'>
                <div className="c-caption__type">
                  {column_2.caption}
                </div>
              </div>
            </div>

            <div className="c-details">
              <h3 className="c-details__title">{column_2.schedules.title}</h3>
              {
                column_2.schedules.items.map((item, index: number) => {
                  return (
                    <div key={index} className="c-details__subsection" data-testid='two column schedule'>
                      <h5 className="c-details__subtitle">{item.title}</h5>
                      <div className="c-details__subsection-content">
                        {(item.entries || []).map((entry, index: number) => {
                          return <div className="c-details__subsection-row" key={index}>
                            <div className="c-details__subsection-column c-details__subsection-column--left">
                              {entry.day}
                            </div>
                            <div className="c-details__subsection-column c-details__subsection-column--right">
                              {entry.time}
                            </div>
                          </div>
                        })}

                      </div>
                    </div>
                  )
                })
              }
            </div>

          </div>
        </div>

        <CTAComponent data={cta} />

      </section>
    </>
  )
}
