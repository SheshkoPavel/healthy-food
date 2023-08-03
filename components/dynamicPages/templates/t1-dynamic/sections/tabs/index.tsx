import React, { useState } from 'react';
import classNames from 'classnames';

import { T1TabbedMainContent } from '@/types';
import { ImageComponent, LinkComponent, RichText } from '@/components';

export const T1TabsSection = ({ data }: any) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const {
    visible,
    title,
    headline_copy,
    link,
    tabs,
  }: T1TabbedMainContent = data;

  if (!visible) { return null }

  return (
    <section>
      <div className="p-template-1__tabs" data-testid='tabs section'>
        <div className="p-template-1__tabs-links">
          <h2 className="p-template-1__tabs-title" data-testid='tabs title'>{title}</h2>
          {headline_copy && <div className="p-template-1__tabs-description" data-testid='tabs description'>
            <RichText text={headline_copy} />
          </div>}
          {link && link[0] &&<LinkComponent link={link[0]} className="p-template-1__tabs-button c-button c-button--outlined">
            <span className="c-button__label">{link[0].abstract?.link_title}</span>
          </LinkComponent>}

          <div className="p-template-1__tabs-list">
            {(tabs || []).map((item, index: number) => {

              const className = classNames(
                'p-template-1__tabs-tab-link c-link',
                index === selectedTabIndex && 'c-tabs__item--active'
              );

              return (
                <div key={index} className={'p-template-1__tabs-tab-item'} data-testid="tab link">
                  <span className={className} onClick={() => setSelectedTabIndex(index)}>
                    {item.title}
                  </span>
                </div>
              )
            })}
          </div>

          {/* tabs mobile */}
          <div className="p-template-1__tabs-list-mobile c-tabs">
            <div className="p-template-1__tabs-list-mobile-items-wrapper">
              {(tabs || []).map((item, index: number) => {
                const className = classNames(
                  'p-template-1__tabs-list-mobile-tab c-tabs__item c-link',
                  index === selectedTabIndex && 'c-tabs__item--active'
                );

                return (
                  <span
                    key={index}
                    className={className}
                    onClick={() => setSelectedTabIndex(index)}
                  >
                    {item.title}
                  </span>
                )
              })}
            </div>
          </div>
        </div>

        {tabs[selectedTabIndex] && <div className="p-template-1__tabs-content">
          <div className="p-template-1__tabs-content-col--left">
            <div className="p-template-1__tabs-content-card-image p-template-1__tabs-content-card-image--top">
              <ImageComponent
                className="p-template-1__tabs-image"
                width={291}
                height={291}
                data={tabs[selectedTabIndex].content.image_1}
              />
            </div>

            <div className="p-template-1__tabs-content-card-type p-template-1__tabs-content-card-type--blue">
              <h5 className="p-template-1__tabs-content-card-title">
                {tabs[selectedTabIndex].content.text_block.title}
              </h5>
              {tabs[selectedTabIndex].content.text_block && tabs[selectedTabIndex].content.text_block.headline_copy && <div className="p-template-1__tabs-content-card-description">
                <RichText text={tabs[selectedTabIndex].content.text_block.headline_copy} />
              </div>}
            </div>

            <div className="p-template-1__tabs-content-card-image p-template-1__tabs-content-card-image--bottom">
              <ImageComponent
                className="p-template-1__tabs-image"
                width={414}
                height={414}
                data={tabs[selectedTabIndex].content.image_2}
              />
            </div>
          </div>

          <div className="p-template-1__tabs-content-col--right">
            <div className="p-template-1__tabs-content-card-type p-template-1__tabs-content-card-type--brown">
              <h5 className="p-template-1__tabs-content-card-title">
                {tabs[selectedTabIndex].content.text_block_2.title}
              </h5>

              {tabs[selectedTabIndex].content.text_block_2 && tabs[selectedTabIndex].content.text_block_2.headline_copy && <div className="p-template-1__tabs-content-card-description">
                <RichText text={tabs[selectedTabIndex].content.text_block_2.headline_copy} />
              </div>}
            </div>
          </div>

          {/* mobile view for tabs content */}
          <>
            <div className="p-template-1__tabs-content-card--mobile">
              <div className="p-template-1__tabs-content-card-image">
                <ImageComponent
                  className="p-template-1__tabs-image"
                  width={291}
                  height={291}
                  data={tabs[selectedTabIndex].content.image_1}
                />
              </div>
              <div className="p-template-1__tabs-content-card-type p-template-1__tabs-content-card-type--brown">
                <h5 className="p-template-1__tabs-content-card-title">
                  {tabs[selectedTabIndex].content.text_block.title}
                </h5>
                {tabs[selectedTabIndex].content.text_block && tabs[selectedTabIndex].content.text_block.headline_copy && <div className="p-template-1__tabs-content-card-description">
                  <RichText text={tabs[selectedTabIndex].content.text_block.headline_copy} />
                </div>}
              </div>
            </div>

            <div className="p-template-1__tabs-content-card--mobile">
              <div className="p-template-1__tabs-content-card-image">
                <ImageComponent
                  className="p-template-1__tabs-image"
                  width={414}
                  height={414}
                  data={tabs[selectedTabIndex].content.image_2}
                />
              </div>
              <div className="p-template-1__tabs-content-card-type p-template-1__tabs-content-card-type--blue">
                <h5 className="p-template-1__tabs-content-card-title">
                  {tabs[selectedTabIndex].content.text_block_2.title}
                </h5>
                {tabs[selectedTabIndex].content.text_block_2 && tabs[selectedTabIndex].content.text_block_2.headline_copy && <div className="p-template-1__tabs-content-card-description">
                  <RichText text={tabs[selectedTabIndex].content.text_block_2.headline_copy} />
                </div>}
              </div>
            </div>
          </>

        </div>}

      </div>
    </section>
  )
}
