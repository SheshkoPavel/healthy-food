import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const useMountAngularApp = () => {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', (url) => {
      try {
        (window as any).angularRouter.navigate([router.pathname])
          .then(() => {
            console.log('Successfully navigated');
          })
          .catch(() => {
            console.log('Could not navigate');
          });
      } catch (err) {
        console.log('Could not navigate');

      }
    });
  }, []);

  useEffect(() => {

    (window as any).router = router;

    if (!(window as any).wasMounted) {
      const body = document.getElementsByTagName('body')[0];
      // body.appendChild(document.createElement('app-root'));

      const loadScript = (path: string) => new Promise((resolve) => {
        const body = document.getElementsByTagName('body')[0];
        const script = document.createElement('script');

        script.type = 'text/javascript';
        script.src = path;
        body.appendChild(script);

        script.onload = () => {
          resolve(null);
        };
      })
        .then(() => {
          console.log('loaded', path);
        });

      const loadScipts = async () => {
        await loadScript('/inline.bundle.js');
        await loadScript('/polyfills.bundle.js');
        await loadScript('/styles.bundle.js');
        await loadScript('/scripts.bundle.js');
        await loadScript('/vendor.bundle.js');
        await loadScript('/main.bundle.js');
      };

      (window as any).loadScipts = loadScipts;

      // loadScipts()
    }

    (window as any).wasMounted = true;

  }, []);
};
