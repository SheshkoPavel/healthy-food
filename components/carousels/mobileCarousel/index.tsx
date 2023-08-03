import { useState, useCallback } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

interface CardCarouselData {
  children?: any[];
  className?: string;
  controlsRef?: any;
}

export const useMobileCarousel = (items: any) => {
  const [selectedItem, setSelectedItem] = useState(0);

  const carouselLength = (items && items.length) || 0;

  const onPrevClick = () => {
    if (selectedItem === 0) {
      return setSelectedItem(carouselLength - 1);
    }

    return setSelectedItem(selectedItem - 1);
  };

  const onNextClick = () => {
    if (selectedItem === carouselLength - 1) {
      return setSelectedItem(0);
    }

    return setSelectedItem(selectedItem + 1);
  };

  const onChange = useCallback((newItem: any) => {
    setSelectedItem(newItem);
  }, [setSelectedItem]);


  return {
    onPrevClick,
    onNextClick,
    carouselLength,
    selectedItem,
    currentSlide: selectedItem + 1,
    onChange,
  }

}

export const MobileCarousel = (props: any) => {
  const { children, className, selectedItem, onChange } = props;

  const renderItem = (item: any, props: any) => <item.type {...item.props} {...props} />;


  if (!children || !children.length){
    return null;
  }

  return (
    <Carousel
      className={className}
      centerMode={true}
      centerSlidePercentage={100}
      showThumbs={false}
      showIndicators={false}
      selectedItem={selectedItem}
      swipeable={false}
      emulateTouch={true}
      showArrows={false}
      renderItem={renderItem}
      showStatus={false}
      transitionTime={1800}
      onChange={onChange}
    >
      {children}
    </Carousel>
  )
}
