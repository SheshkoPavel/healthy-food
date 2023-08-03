import { T1MosaicCarouselMainContent } from '@/types';

import { DesktopCarousel } from './desktop';
import { MobileCarousel } from './mobile';

export const T1MosaicCarouselSection = ({ data }: any) => {
  const {
    visible,
    mosaic_carousel,
  }: T1MosaicCarouselMainContent = data;

  if (!visible) { return null }

  return (
    <section>
      {mosaic_carousel && mosaic_carousel[0] && <div className="p-template-1__carousel-mosaic-wrapper" data-testid='mosaic section'>
        <div className="p-template-1__carousel-mosaic c-carousel c-carousel-mosaic">
          <DesktopCarousel slides={mosaic_carousel[0].slides} />
        </div>
        <div className="p-template-1__carousel-mosaic-mobile c-carousel c-carousel-mosaic--mobile c-carousel-mosaic--mobile-brand-left">
          {/* <div className="c-carousel-mosaic--mobile__header">
            <div className="c-carousel-mosaic--mobile__header-building">
              <ImageComponent
                className="c-carousel__slide-image"
                width={390}
                height={390}
                data={mosaic_carousel[0].decoration_images.image_1}
              />
            </div>
            <div className="c-carousel-mosaic--mobile__header-brand">
              <ImageComponent
                className="c-carousel__slide-image"
                width={289}
                height={289}
                data={mosaic_carousel[0].decoration_images.logo}
              />
            </div>
          </div> */}
          <MobileCarousel slides={mosaic_carousel[0].slides} />
        </div>
      </div>}
    </section>
  )
}
