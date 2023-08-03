import React from 'react';

import { ImageComponent, LinkComponent, RichText, CardImageComponent } from '@/components';
import { T1TwoColumnMainContent } from '@/types';

export const T1TwoColumnsSection = ({ data }: any) => {
  const {
    visible,
    title,
    headline_copy,
    link,
    image_with_logo,
    caption,
    link_copy,
  }: T1TwoColumnMainContent = data;

  if (!visible) { return null }

  return (
    <>
      <section>
        <div className="p-template-1__2-columns" data-testid='twoColumnsSection section'>
          <div className="p-template-1__2-columns-column">
            <h1 className="p-template-1__2-columns-title" data-testid='twoColumnsSectionLeft title'>
              {title}
            </h1>
            {headline_copy && <div className="p-template-1__2-columns-description" data-testid='twoColumnsSectionLeft description'>
              <RichText text={headline_copy} />
            </div>}
            {link && link[0] && <div className="p-template-1__2-columns-image c-image">
              <div className="c-image__wrapper">
                <ImageComponent
                  className="c-image__image"
                  width={576}
                  height={864}
                  data={link[0]?.abstract?.thumbnail}
                  data-testid='twoColumnsSectionLeft image'
                />
              </div>
              <div className="p-template-1__2-columns-image-caption c-caption">
                <div className="p-template-1__2-columns-image-caption-type c-caption__type" data-testid='twoColumnsSectionLeft caption'>
                  {link[0]?.abstract?.summary}
                </div>
                <LinkComponent
                  titleProp="link_title"
                  link={link[0]}
                  className="c-caption__link c-link"
                  data-testid='twoColumnsSectionLeft link'
                />
              </div>
            </div>}
          </div>

          <div className="p-template-1__2-columns-column p-template-1__2-columns-column--right">
            <div className="p-template-1__2-columns-mosaic">
              <div className="p-template-1__2-columns-mosaic-building">
                <ImageComponent
                  className="p-template-1__2-columns-mosaic-image"
                  width={576}
                  height={864}
                  data={image_with_logo?.image}
                  data-testid='twoColumnsSectionRight image'
                />
              </div>
              <div className="p-template-1__2-columns-mosaic-brand">
                <ImageComponent
                  className="p-template-1__2-columns-mosaic-image"
                  width={289}
                  height={289}
                  data={image_with_logo?.logo}
                  data-testid='twoColumnsSectionRight brand image'
                />
              </div>
            </div>

            <div className="p-template-1__2-columns-subsection-wrapper">
              {caption && <div className="p-template-1__2-columns-subtitle" data-testid='twoColumnsSectionRight description'>
                {caption}
              </div>}

              {/* add className c-content-card--preview */}
              {link_copy && link_copy[0] && <div className="p-template-1__2-columns-preview-card c-content-card c-content-card--preview">
                <LinkComponent
                  className="c-content-card__link"
                  link={link_copy[0]}
                  data-testid='twoColumnsSectionRight link'
                >
                  <CardImageComponent
                    width={300}
                    height={300}
                    data={link_copy[0].abstract?.thumbnail}
                  />
                </LinkComponent>
                <div className="c-content-card__type-container">
                  <LinkComponent className="c-content-card__type-title-link" link={link_copy[0]}>
                    <h3 className="c-content-card__type-title" data-testid='twoColumnsSectionRight card title'>{link_copy[0].abstract?.link_title}</h3>
                  </LinkComponent>
                  <p className="c-content-card__type-body" data-testid='twoColumnsSectionRight card description'>
                    {link_copy[0].abstract?.summary}
                  </p>
                </div>
              </div>}
            </div>

          </div>
        </div>
      </section>

    </>
  )
}
