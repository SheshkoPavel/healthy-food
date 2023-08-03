import Image from 'next/image'
import classNames from 'classnames';

export const ImageComponent = (props: any) => {
  const { data = {}, src, alt, ...rest } = props
  const resultedAlt = alt
    ? alt
    : data && data.image_alt_text || 'image';

  const resultedProps = {
    ...rest,
    src: src
      ? src
      : (data && data.image && data.image.url) || '/assets/img/no-image-icon.png',
    alt: resultedAlt
  }


  return (
    <Image {...resultedProps} alt={resultedAlt} priority />
  )
}

export const CardImageComponent = (props: any) => {
  const { data, ...imageProps } = props;

  const imageWrapperCl = classNames(
    'c-content-card__image-wrapper',
    (!data || !data.image || !data.image.url) && 'c-content-card__image-wrapper--default',
  );

  return (
    <div className={imageWrapperCl}>
      <ImageComponent
        className="c-content-card__image"
        data={data}
        {...imageProps}
      />
    </div>
  )
}
