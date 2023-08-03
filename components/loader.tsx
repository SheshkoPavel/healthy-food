import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { appState, navbarState } from '@/store'
import { Spinner } from '@/components/spinner';

import { observer } from 'mobx-react-lite';

export const Loader = observer(() => {
  const router = useRouter();
  const { loading } = appState;

  useEffect(() => {
    const onRouteChangeStart = (url: string) => {
      if (url.startsWith('/app')) {
        window.location.href = url;
      }
      appState.setLoadingState(true);
      navbarState.init();
    }
    const onRouteChangeComplete = () => {
      appState.setLoadingState(false);
    }

    router.events.on('routeChangeStart', onRouteChangeStart)
    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeStart', onRouteChangeStart)
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  return (
    loading ?
      <div className="l-layout__modal">
        <Spinner />
      </div>
      : null
  )
})
