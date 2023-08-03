import type { AppProps } from 'next/app';
import Head from 'next/head'
import { useEffect, useRef } from 'react'
import { getCookie } from 'cookies-next';
import classNames from 'classnames';

import { PagePropsContext } from '@/hooks';
import { appState } from '@/store';
import {
  Modals,
  Loader,
  Notifications,
  Navbar,
  Footer,
  Spinner,
} from '@/components';
import { GlobalSettings, SEO } from '@/types';

import '@/styles/styles.scss';
import '@/styles/calendar/styles.scss';

import ContentstackLivePreview from '@contentstack/live-preview-utils'

ContentstackLivePreview.init();

console.log('init 123')

const fav = '/favicon.ico';

export default function App({ Component, pageProps }: AppProps) {
  const ref = useRef<HTMLDivElement>(null);


  useEffect(() => {
    window.addEventListener('message', (e) => {
      const { data, from, type } = e.data
      console.log(e)
    });
  }, [])

  useEffect(() => {
    console.log(pageProps);
    ref.current?.scrollTo(0, 0);
    appState.context = pageProps.context;

    if (pageProps.isAuthorized) {
      const NSMemberRecord = getCookie('NSMemberRecord') || '';
      try {
        const userInfo = JSON.parse(NSMemberRecord.toString());
        appState.setUserInfo(userInfo.response);
      } catch (err) {
        console.log('err')
      }
    }
  });

  pageProps.showLayoutPattern = pageProps.contentStack?.pageData?.content_type_uid === 'public_facing_home_t1';
  const className = classNames('l-layout',
    pageProps.showLayoutPattern && 'l-layout--bg-pattern',
  )
  const theme = pageProps.contentStack?.global_settings?.theme;

  const fullClassName = classNames(className,
    theme === 'light' && 'l-layout--bg-light',
    theme === 'dark' && 'l-layout--bg-dark',
  );

  const { title: seoTitle, description, canonical = {}, og_tags = [], noindex, nofollow }: SEO = pageProps?.contentStack?.pageData?.seo || {};
  const { favicon }: GlobalSettings = pageProps?.contentStack?.global_settings || {};
  const pageTitle = pageProps?.contentStack?.pageData?.title;
  const currentUrl = pageProps?.contentStack?.pageData?.url;

  const isTagDefined = (tag: string) => {
    return !!og_tags.find(el => el.key === tag)
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{seoTitle || pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        {description && <meta name="description" content={description} />}
        <link rel="canonical" href={canonical?.href || currentUrl} />
        <link rel="icon" href={fav} />
        <link rel="manifest" href="/site.webmanifest" />
        {og_tags.map((item: any, index: number) => {
          return <meta key={index} property={item.key} content={item.value} />
        })}

        {!isTagDefined('og:title') && <meta property="og:title" content={pageTitle} />}
        {!isTagDefined('og:description') && description && <meta property="og:description" content={description} />}
        {!isTagDefined('og:url') && <meta property="og:url" content={canonical?.href || currentUrl} />}

        {!isTagDefined('twitter:title') && <meta property="twitter:title" content={pageTitle} />}
        {!isTagDefined('twitter:description') && description && <meta property="twitter:description" content={description} />}
        {!isTagDefined('twitter:url') && <meta property="twitter:url" content={canonical?.href || currentUrl} />}

        {noindex && nofollow && <meta name="robots" content="noindex, nofollow" />}
        {noindex && !nofollow && <meta name="robots" content="noindex" />}
        {!noindex && nofollow && <meta name="robots" content="nofollow" />}
      </Head>
      {/* add className l-layout--bg-pattern for t1 */}
      <div className={fullClassName} ref={ref}>
        <Loader />
        <Modals />
        <Notifications />
        {!pageProps.pageType && (
          <PagePropsContext.Provider value={{ ...pageProps }}>
            <Navbar />
            <main className="l-layout__content">
              <Component {...pageProps} />
            </main>
            <Footer />
          </PagePropsContext.Provider>
        )}
        {pageProps.pageType === 'development' && (
          <Component {...pageProps} />
        )}
        {pageProps.pageType === 'external' && (
          <div className="l-layout__modal">
            <Spinner />
          </div>)}
      </div>
    </>
  );
}
