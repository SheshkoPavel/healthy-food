import { useEffect, useState } from 'react';

export const useIsMobile = (width: number) => {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const onResize = () => {
      const currentWidth = window.innerWidth;
      const value = currentWidth <= width;
      setIsMobile(value);
    };
    onResize();

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize)
    }

  }, [])

  return isMobile;

}

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    const onResize = () => {
      const currentWidth = window.innerWidth;
      setScreenWidth(currentWidth);
    };
    onResize();

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize)
    }

  }, [])

  return screenWidth;

}
