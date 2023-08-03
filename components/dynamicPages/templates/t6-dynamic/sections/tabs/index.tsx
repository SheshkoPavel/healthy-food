import React, { useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

import { CTAComponent, ImageComponent, RichText, VideoPlayer } from '@/components';
import { T6TabbedMainContent } from '@/types';

export const T6TabsSection = ({ data }: any) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const {
    visible,
    title,
    headline_copy,
    tabs,
  }: T6TabbedMainContent = data;

  if (!visible) { return null }

  return (
    <section data-testid='tabs section'>
      <div className="p-template-6-tabs">
        <div className="p-template-6-main-headline">
          <h2 className="p-template-6-main-headline__title">
            {title}
          </h2>
          <div className="p-template-6-main-headline__description">
            <RichText text={headline_copy} />
          </div>
        </div>

        <div className="p-template-6-tabs__wrapper">
          <div className="p-template-6-tabs__list c-tabs">
            <div className="p-template-6-tabs__list-items-wrapper">
              {(tabs || []).map((item, index: number) => {

                const className = classNames(
                  'p-template-6-tabs__list-tab c-tabs__item c-link',
                  index === selectedTabIndex && 'c-tabs__item--active'
                );

                return (
                  <span key={index} className={className} onClick={() => setSelectedTabIndex(index)} data-testid='tabs'>
                    {item.title}
                  </span>
                )
              })}
            </div>

          </div>
        </div>

        {
          tabs[selectedTabIndex] && <div className="p-template-6-tabs__content" data-testid='tabs content'>
            <div className="p-template-6-main-headline">
              {tabs[selectedTabIndex].content.video_link &&
                <div className="p-template-6-video">
                  <VideoPlayer link={tabs[selectedTabIndex].content.video_link} />
                </div>
              }
              {tabs[selectedTabIndex].content.image && tabs[selectedTabIndex].content.image?.image && !tabs[selectedTabIndex].content.video_link &&
                <div className="p-template-6-image-component c-image">
                  <div className="p-template-6-image-component__wrapper c-image__wrapper">
                    <ImageComponent
                      className="c-image__image"
                      data={tabs[selectedTabIndex].content.image}
                      width={1028}
                      height={578}
                    />
                  </div>
                </div>
              }
              <h2 className="p-template-6-main-headline__title">
                {tabs[selectedTabIndex].content.title}
              </h2>
              {tabs[selectedTabIndex].content && tabs[selectedTabIndex].content.headline_copy && <div className="p-template-6-main-headline__description">
                <RichText text={tabs[selectedTabIndex].content.headline_copy} />
              </div>}
              <div className="p-template-6-download-subsection">
                {(tabs[selectedTabIndex]?.content?.files || []).map((item, index: number) => {
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
                <CTAComponent data={tabs[selectedTabIndex].content.cta} />
              </div>

            </div>
          </div>
        }
      </div>
    </section>
  )
}
