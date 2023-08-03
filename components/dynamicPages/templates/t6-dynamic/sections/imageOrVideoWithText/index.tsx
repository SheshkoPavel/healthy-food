import React from 'react';
import Link from 'next/link';

import { CTAComponent, ImageComponent, RichText, VideoPlayer } from '@/components';
import { T6ImageOrVideoWithTextMainContent } from '@/types';

export const T6ImageOrVideoWithTextSection = ({ data }: any) => {
  const {
    visible,
    title,
    headline_copy,
    files = [],
    cta,
    image,
    video_link,
    subtitle,
    secondary_copy,
    sub_files = [],
    sub_cta,
  }: T6ImageOrVideoWithTextMainContent = data;

  if (!visible) { return null }

  return (
    <section data-testid='image text section'>
      <div className="p-template-6-image-subsection">
        <div className="p-template-6-secondary-headline">
          {
            title && <h4 className="p-template-6-secondary-headline__title" data-testid='image text title'>
              {title}
            </h4>
          }
          <div className="p-template-6-secondary-headline__description" data-testid='image text headline'>
            {
              headline_copy && <RichText text={headline_copy} />
            }
          </div>
        </div>

        <div className="p-template-6-download-subsection">
          {files.map((item, index: number) => {
            return (
              <div key={index} className="c-subsection__headline" data-testid='image text file'>
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

        <div className="p-template-6-cta">
          <CTAComponent data={cta} />
        </div>

        {video_link &&
          <div className="p-template-6-video">
            <VideoPlayer link={video_link} />
          </div>
        }

        {!video_link && image && image.image && <div className="p-template-6-image-component c-image" data-testid='image text image'>
          <div className="p-template-6-image-component__wrapper c-image__wrapper c-image__wrapper--16-9">
            <ImageComponent
              className="c-image__image"
              data={image}
              width={1028}
              height={578}
            />
          </div>
        </div>}

        <div className="p-template-6-secondary-headline" data-testid='image text subtitle'>
          {
            subtitle && <h4 className="p-template-6-secondary-headline__title">
              {subtitle}
            </h4>
          }
          <div className="p-template-6-secondary-headline__description" data-testid='image text secondary'>
            {
              secondary_copy && <RichText text={secondary_copy} />
            }
          </div>

          <div className="p-template-6-download-subsection" data-testid='image text subfiles'>
            {sub_files.map((item, index: number) => {
              return (
                <div key={index} className="c-subsection__headline" data-testid='two column file'>
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

          <div className="p-template-6-cta">
            <CTAComponent data={sub_cta} />
          </div>

        </div>

      </div>
    </section>
  )
}
