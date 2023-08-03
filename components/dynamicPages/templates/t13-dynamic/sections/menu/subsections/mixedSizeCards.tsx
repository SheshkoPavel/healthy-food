import { Fragment } from 'react';

import { MenuItem, T13CommonMenuContent } from '@/types';
import { CardImageComponent } from '@/components/imageComponent';
import { RichText } from '@/components/richText';

export const T13MixedSizeCardsMenu = ({ data }: any) => {
  const {
    visible,
    title,
    headline_copy,
    items = [],
    section_anchor,
  }: T13CommonMenuContent = data;

  if (!visible) { return null }

  let smallItems: MenuItem[] = [];
  let column1, column2;
  if (items.length > 1) {
    smallItems = items.slice(1);

    const index = Math.floor(smallItems.length / 2);

    column1 = smallItems.slice(0, index);
    column2 = smallItems.slice(index);
  }

  return (
    <>
      <div className="p-template-13-menu__section" id={section_anchor} data-testid='menu mixed cards'>
        <div className="p-template-13-menu__section-header">
          <h3 className="p-template-13-menu__section-title" data-testid='menu mixed cards title'>
            {title}
          </h3>
          {headline_copy && <div className="p-template-13-menu__section-descriprion" data-testid='menu mixed cards description'>
            <RichText text={headline_copy} />
          </div>}
        </div>

        <div className="p-template-13-menu__section-mixed-cards">
          <div className="p-template-13-menu__section-mixed-cards-column">
            {/* title content card */}
            {
              items && items[0] && <div className="c-content-card c-content-card--medium c-content-card--static" data-testid='menu mixed cards item'>
                <div className="c-content-card__link">
                  <CardImageComponent
                    width={292}
                    height={195}
                    data={items[0]?.image}
                  />
                </div>
                <div className="c-content-card__type-container">
                  <h3 className="c-content-card__type-title">{items[0]?.name}</h3>
                  <p className="c-content-card__type-body">
                    {items[0]?.summary}
                  </p>
                </div>
              </div>
            }

            {
              (column1 || []).map((menuItem, index: number) => {
                return ( //preview card
                  <div key={index} className="c-content-card c-content-card--small c-content-card--static" data-testid='menu mixed cards column1 item'>
                    <div className="c-content-card__link">
                      <CardImageComponent
                        width={82}
                        height={82}
                        data={menuItem.image}
                      />
                    </div>
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
                                <span className="p-template-13-menu__section-mixed-card-tag c-content-card__type-tag c-link">{categorie.title}</span>
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

          <div className="p-template-13-menu__section-mixed-cards-column">
            {
              (column2 || []).map((menuItem, index: number) => {
                return ( //preview card
                  <div key={index} className="c-content-card c-content-card--small c-content-card--static" data-testid='menu mixed cards column2 item'>
                    <div className="c-content-card__link">
                      <CardImageComponent
                        width={82}
                        height={82}
                        data={menuItem.image}
                      />
                    </div>
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
                                <span className="p-template-13-menu__section-mixed-card-tag c-content-card__type-tag c-link">{categorie.title}</span>
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

      </div>
    </>
  )
}
