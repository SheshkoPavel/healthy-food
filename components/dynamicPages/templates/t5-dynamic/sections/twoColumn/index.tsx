import React from 'react';
import Link from 'next/link'

import { RichText, LinkComponent, CardImageComponent, VideoPlayer } from '@/components';
import { usePageProps } from '@/hooks';
import { isPageAvailable } from '@/utils';
import { T5TwoColumnMainContent } from '@/types';

export const T5TwoColumnSection = ({ data }: any) => {
  const { isAuthorized } = usePageProps();

  if (!data) { return <div>Error get data from server</div> }

  const {
    column_1,
    column_2,
    visible,
  }: T5TwoColumnMainContent = data;

  const {
    video_link,
    title,
    headline_copy,
    files = [],
  } = column_1;

  const {
    items = [],
  } = column_2;

  if (!visible) { return null }

  const availableItems = items.filter(item => isPageAvailable(item, isAuthorized))

  return (
    <section data-testid='two column section'>
      <div className="p-template-5-2-columns-gap-free">
        <div className="p-template-5-2-columns-gap-free__column--left">
          <div className="c-subsection">
            <div className="c-subsection__header">
              {video_link &&
                <div className="p-template-5-video">
                  <VideoPlayer link={video_link} />
                </div>
              }

              <h2 className="c-subsection__header-title" data-testid='two column title'>{title}</h2>
              <div className="c-subsection__header-description" data-testid='two column description'>
                <RichText text={headline_copy} />
              </div>
            </div>
            <div className="p-template-5-2-columns-gap-free__subsections">
              {files.map((item, index: number) => {
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
                    {item.link && <LinkComponent
                      link={item.link[0]}
                      titleProp='link_title'
                      className="c-subsection__headline-link c-link c-link--icon"
                    />}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="p-template-5-2-columns-gap-free__column--right">
          <div className="p-template-5-2-columns-gap-free__content-cards p-template-5-2-columns-gap-free__content-cards--transparent">
            {
              availableItems.map((item, index: number) => {
                return (
                  <div key={index} className="c-content-card c-content-card--medium" data-testid='two column card'>
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
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}
