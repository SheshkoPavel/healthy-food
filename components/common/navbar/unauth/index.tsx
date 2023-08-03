import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';

import { usePageProps } from '@/hooks';
import { getAvailabelItems } from '@/utils';
import { navbarState } from '@/store';
import { ImageComponent } from '@/components/imageComponent';

export const UnauthNavbar = observer(() => {
  const { contentStack, showLayoutPattern = false } = usePageProps();
  const {
    pageData,
  } = contentStack || {};

  if (!pageData) { return null }

  const {
    header,
  } = pageData;
  const router = useRouter();

  if (!header) {
    return <div>Error get data from server</div>
  }

  const {
    logo,
    primary_navigation,
  } = header[0];

  const onCloseMenu = () => {
    navbarState.setShowMobileMenu(false);
  };

  const onOpenMenu = () => {
    navbarState.setShowMobileMenu(true);
  };

  const onMenuLinkClick = (link: string) => {
    navbarState.setShowMobileMenu(false);
    router.push(link);
  }

  const primary = getAvailabelItems(primary_navigation.filter(item => item.visible), (item: any) => item.audience.type, false)[0]

  const navLinks = primary && (primary.links || []).map((el: any, index: number) => {
    const title = el.abstract?.title;
    const href = el.url;

    return (
      <span
        key={index}
        className={'c-header__nav-link c-link'}
        onClick={() => onMenuLinkClick(href)}
      >
        {title}
      </span>
    )
  });

  const headerRef = useRef<HTMLDivElement>(null);
  const headerCl = classNames(
    'c-header',
    !showLayoutPattern && 'c-header--bg-filled',
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (headerRef.current && window.scrollY <= 0) {
      headerRef.current.classList.remove('c-header--bg-filled');
    }

    if (headerRef.current && window.scrollY > 0) {
      headerRef.current.classList.add('c-header--bg-filled');
    }
  };

  return (
    <div className='l-layout__header'>

      <header ref={headerRef} className={headerCl}>
        <div className="c-header__inner">


          <div className={'c-header__close'}>
            {navbarState.isShowMobileMenu
              ? <span className={'c-header__close--icon c-icon c-icon--close'} onClick={onCloseMenu} />
              : <span className={'c-header__close--icon c-icon c-icon--humburger'} onClick={onOpenMenu} data-testid={'hamburger'} />
            }
          </div>

          <div className={'c-header__nav c-header__nav--unauth'}>

            <Link href={'/'}>
              <div>
                <ImageComponent
                  className="c-header__logo-img"
                  data={logo}
                  width={157}
                  height={100}
                />
              </div>
            </Link>

            <div className="c-header__main-nav-wrapper">
              <div className="c-header__main-nav">
                <>
                  {navLinks}
                </>
              </div>
            </div>
          </div>

        </div>

        {
          navbarState.isShowMobileMenu &&
          <div className="c-header__mobile-nav" data-testid={'mobileNav'}>
            <div className={'c-header__mobile-main-nav'}>
              <>
                {navLinks}
              </>
            </div>

            <div className="c-header__mobile-account-menu">

            </div>
          </div>
        }

      </header>
    </div>
  )
})
