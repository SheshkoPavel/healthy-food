import { Fragment } from 'react';

import { usePageProps } from '@/hooks';
import {
  T13MenuContent,
  T13MenuMainContent,
} from '@/types';

import {
  T13BigSizeCardsMenu,
  T13FeaturedMenu,
  T13MixedSizeCardsMenu,
  T13SmallSizeCardsMenu,
  T13SmallSizeCardsMenuWithoutImages,
} from './subsections';

const getSubsectionComponent = (content: T13MenuContent) => {
  const {
    featured,
    big_size_cards,
    mixed_size_cards,
    small_size_cards,
    small_size_cards_without_images,
  } = content;

  if (featured) {
    return <T13FeaturedMenu data={featured} />
  }
  if (big_size_cards) {
    return <T13BigSizeCardsMenu data={big_size_cards} />
  }
  if (mixed_size_cards) {
    return <T13MixedSizeCardsMenu data={mixed_size_cards} />
  }
  if (small_size_cards) {
    return <T13SmallSizeCardsMenu data={small_size_cards} />
  }

  if (small_size_cards_without_images) {
    return <T13SmallSizeCardsMenuWithoutImages data={small_size_cards_without_images} />
  }

  return <>
    <div>Unknown subsection</div>
  </>
}

export const T13MenuSection = ({ data }: any) => {
  const { isAuthorized } = usePageProps();
  const {
    visible,
    title,
    menu_content,
  }: T13MenuMainContent = data;

  if (!visible) { return null }

  return (
    <>
      <section>
        <div className="p-template-13-menu">
          <h2 className="p-template-13-menu__title">{title}</h2>
          {
            menu_content
              .filter((content: any) => {
                const key = Object.keys(content)[0]
                return content[key].visible
              })
              .map((content, index: number) => {
                return (
                  <Fragment key={index}>
                    {getSubsectionComponent(content)}
                  </Fragment>
                )
              })
          }
        </div>
      </section>
    </>
  )
}
