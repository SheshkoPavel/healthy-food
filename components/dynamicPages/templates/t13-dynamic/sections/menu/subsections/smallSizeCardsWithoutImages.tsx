import { Fragment } from 'react';

import { T13CommonMenuContent } from '@/types';
import { CardImageComponent } from '@/components/imageComponent';
import { RichText } from '@/components/richText';

export const T13SmallSizeCardsMenuWithoutImages = ({ data }: any) => {
  const {
    visible,
    title,
    headline_copy,
    items = [],
    section_anchor,
  }: T13CommonMenuContent = data;

  if (!visible) { return null }

  return (
    <>
      <div className="p-template-13-menu__section" id={section_anchor} data-testid='menu small cards without images'>
        <div className="p-template-13-menu__section-header">
          <h3 className="p-template-13-menu__section-title" data-testid='menu small cards without images title'>
            {title}
          </h3>
          {headline_copy && <div className="p-template-13-menu__section-descriprion" data-testid='menu small cards without images description'>
            <RichText text={headline_copy} />
          </div>}
        </div>

        <div className="p-template-13-menu__section-preview-cards p-template-13-menu__section-preview-cards--3-columns">
          {
            items.map((menuItem, index: number) => {
              return (
                <div key={index} className="c-content-card c-content-card--small c-content-card--static" data-testid='menu small cards without images item'>
                  {/* <div className="c-content-card__link">
                    <CardImageComponent
                      width={82}
                      height={82}
                      data={menuItem.image}
                    />
                  </div> */}
                  <div className="c-content-card__type-container">
                    <h3 className="c-content-card__type-title">{menuItem.name}</h3>
                    <p className="c-content-card__type-body">
                      {menuItem.summary}
                    </p>
                    <div className="c-content-card__type-tags">
                      {
                        (menuItem.categories || []).map((categorie, index: number) => {
                          return (
                            <Fragment key={index}>
                              <span className="p-template-13-menu__section-preview-card-tag c-content-card__type-tag c-link">{categorie.title}</span>
                              {index < ((menuItem.categories || []).length - 1) ? <span className="c-content-card__type-delimiter">&middot;</span> : null}
                            </Fragment>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
