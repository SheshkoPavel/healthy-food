import { useEffect, useRef } from 'react';

export const useRememberScrollPosition = (router: any) => {
  const lastScroll = useRef(0)

  useEffect(() => {
    window.scrollTo({ top: lastScroll.current })
  }, [router])

  useEffect(() => {
    const onScroll = () => {
      lastScroll.current = window.scrollY;
    }

    onScroll();

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
}
