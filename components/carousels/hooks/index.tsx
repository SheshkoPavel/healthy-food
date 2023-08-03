import { useEffect, useRef } from 'react';

import { useScreenWidth } from '@/hooks';

const gapBetweenSlides = 24;

export const useComputedCarousel = (items?: any[]) => {
  const carouselWrapperRef = useRef<any>();
  const carouselRef = useRef<any>();
  const slideWidthRef = useRef<number>(0);
  const screenWidthRef = useRef<any>(0);
  const currentSlideRef = useRef<number>(0);

  const carouselLenght = items?.length || 0;

  useEffect(() => {
    const onResize = () => {
      currentSlideRef.current = 0;
      screenWidthRef.current = window.document.body.clientWidth;

      if (screenWidthRef.current >= 1920) {
        slideWidthRef.current = (carouselWrapperRef.current.clientWidth - 5 * gapBetweenSlides) / 6;
      }

      if (screenWidthRef.current < 1920) {
        slideWidthRef.current = (carouselWrapperRef.current.clientWidth - 4 * gapBetweenSlides) / 5;
      }

      if (screenWidthRef.current < 1440) {
        slideWidthRef.current = (carouselWrapperRef.current.clientWidth - 3 * gapBetweenSlides) / 4;
      }

      if (screenWidthRef.current < 1200) {
        slideWidthRef.current = (carouselWrapperRef.current.clientWidth - 2 * gapBetweenSlides) / 3;
      }

      if (screenWidthRef.current < 768) {
        slideWidthRef.current = (carouselWrapperRef.current.clientWidth - 72 - 2 * gapBetweenSlides) / 2;
      }

      if (screenWidthRef.current < 576) {
        slideWidthRef.current = carouselWrapperRef.current.clientWidth - 64 - 1 * gapBetweenSlides;
      }
      scrollToCurrentSlide();

    };
    onResize();

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize)
    }

  }, [])

  useEffect(() => {
    currentSlideRef.current = 0;
    scrollToCurrentSlide();
  }, [items])

  const onPrevClick = () => {
    if (currentSlideRef.current > 0) {
      currentSlideRef.current -= 1;
    }

    scrollToCurrentSlide();
  };

  const onNextClick = () => {
    if (screenWidthRef.current >= 1920 && currentSlideRef.current + 6 > carouselLenght - 1) {
      return
    }

    if (screenWidthRef.current < 576 && currentSlideRef.current + 1 > carouselLenght - 1) {
      return
    }

    if (screenWidthRef.current < 768 && screenWidthRef.current >= 576 && currentSlideRef.current + 2 > carouselLenght - 1) {
      return
    }

    if (screenWidthRef.current < 1200 && screenWidthRef.current >= 768 && currentSlideRef.current + 3 > carouselLenght - 1) {
      return
    }

    if (screenWidthRef.current < 1440 && screenWidthRef.current >= 1200 && currentSlideRef.current + 4 > carouselLenght - 1) {
      return
    }

    if (screenWidthRef.current < 1920 && screenWidthRef.current >= 1440 && currentSlideRef.current + 5 > carouselLenght - 1) {
      return
    }

    currentSlideRef.current += 1;

    scrollToCurrentSlide();
  };

  const scrollToCurrentSlide = () => {
    let shift = 0;

    if (screenWidthRef.current >= 1200) {
      shift = 0
    }

    if (screenWidthRef.current < 1200) {
      shift = 0
    }

    if (screenWidthRef.current < 768) {
      shift = (72 + gapBetweenSlides) / 2;
    }

    if (screenWidthRef.current < 576) {
      shift = (64 + gapBetweenSlides) / 2;
    }

    const nextScrollPosition = (slideWidthRef.current + gapBetweenSlides) * currentSlideRef.current - shift;

    carouselRef.current.scrollTo(nextScrollPosition, 0)
  };

  return {
    carouselWrapperRef,
    carouselRef,
    onPrevClick,
    onNextClick,
  }
}

export const useShouldShowComputedCarousel = (items: any[]) => {
  const screenWidth = useScreenWidth();

  let shouldShowCarousel = false;

  if (screenWidth >= 1920) {
    shouldShowCarousel = items.length > 6;
  }

  if (screenWidth < 1920) {
    shouldShowCarousel = items.length > 5;
  }

  if (screenWidth < 1440) {
    shouldShowCarousel = items.length > 4;
  }

  if (screenWidth < 1200) {
    shouldShowCarousel = items.length > 3;
  }

  if (screenWidth < 768) {
    shouldShowCarousel = items.length > 2;
  }

  if (screenWidth < 576) {
    shouldShowCarousel = items.length > 1;
  }

  return shouldShowCarousel
}
