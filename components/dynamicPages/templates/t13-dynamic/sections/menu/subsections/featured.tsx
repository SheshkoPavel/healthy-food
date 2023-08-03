import { T13CommonMenuContent } from '@/types';
import { ImageComponent } from '@/components/imageComponent';
import { RichText } from '@/components/richText';

export const T13FeaturedMenu = ({ data }: any) => {
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
      <div className="p-template-13-menu__section" id={section_anchor} data-testid='menu featured'>
        <div className="p-template-13-menu__section-header">
          <h3 className="p-template-13-menu__section-title" data-testid='menu featured title'>
            {title}
          </h3>
          {headline_copy && <div className="p-template-13-menu__section-descriprion" data-testid='menu featured descriprion'>
            <RichText text={headline_copy} />
          </div>}
        </div>

        <div className="p-template-13-menu__section-image-cards">
          {
            items.map((menuItem, index: number) => {
              return(
                <div
                  key={index}
                  className="p-template-13-menu__section-image-card c-image-card c-image-card--static"
                  data-testid='menu featured item'
                >
                  <div className="c-image-card__wrapper">
                    <ImageComponent
                      className="c-image-card__image"
                      width={292}
                      height={438}
                      data={menuItem.image}
                    />
                  </div>
                  <div className="p-template-13-menu__section-image-card-caption c-image-card__caption">
                    {menuItem.name}
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
