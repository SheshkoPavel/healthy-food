import { T13CommonMenuContent } from '@/types';
import { CardImageComponent } from '@/components/imageComponent';
import { RichText } from '@/components/richText';

export const T13BigSizeCardsMenu = ({ data }: any) => {
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
      <div className="p-template-13-menu__section" id={section_anchor} data-testid='menu big cards'>
        <div className="p-template-13-menu__section-header">
          <h3 className="p-template-13-menu__section-title" data-testid='menu big cards title'>
            {title}
          </h3>
          {headline_copy && <div className="p-template-13-menu__section-descriprion" data-testid='menu big discription'>
            <RichText text={headline_copy} />
          </div>}
        </div>

        <div className="p-template-13-menu__section-content-cards">
          {
            items.map((menuItem, index: number) => {
              return (
                <div
                  key={index}
                  className="p-template-13-menu__section-content-card c-content-card c-content-card--medium c-content-card--static"
                  data-testid='menu big cards item'
                >
                  <div className="p-template-13-menu__section-content-card-link c-content-card__link">
                    <CardImageComponent
                      width={292}
                      height={195}
                      data={menuItem.image}
                    />
                  </div>
                  <div className="p-template-13-menu__section-content-card-container c-content-card__type-container">
                    <h3 className="c-content-card__type-title">{menuItem.name}</h3>
                    <p className="c-content-card__type-body">
                      {menuItem.summary}
                    </p>
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
