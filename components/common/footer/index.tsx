import Link from 'next/link';
import { FC } from 'react';
import classNames from 'classnames';

import { usePageProps } from '@/hooks';
import { ImageComponent, LinkComponent } from '@/components';
import { getAvailabelItems } from '@/utils';

export const Footer: FC = () => {
  const { contentStack } = usePageProps();
  const { pageData, global_settings } = contentStack || {};
  const { footer } = pageData || {};

  if (!footer) {
    return <div className="l-layout__footer">Error</div>;
  }

  const {
    main_content,
    utility_navigation,
  } = footer[0];

  const { club_address, copyright, phone_number } = global_settings;

  const {
    city,
    country,
    postal_code,
    state_province,
    street_1,
    street_2,
  } = club_address;

  const background = getAvailabelItems(footer[0].background, (item: any) => item.audience, false)[0];
  const logo = getAvailabelItems(footer[0].logo, (item: any) => item.audience, false)[0];

  const { column_1, column_2 } = (main_content && main_content[0] && main_content[0].two_column_navigation) || {};

  const logoCl = classNames(
    'c-footer__logo',
    'c-footer__logo--unauth'
  );

  return (
    <footer className="l-layout__footer">
      <div className="c-footer">
        <div className="c-footer__inner" data-testid='footer-inner' style={{
          ['--footer__bi' as string]: `url(${background.image.url.toString()})`,
        }}>
          <div className="c-footer__location">
            <span className="c-footer__logo-link" data-testid='logoLink'>
              <div className={logoCl}>
                <ImageComponent
                  className="c-footer__logo-img"
                  width={329}
                  height={60}
                  data={logo}
                />
              </div>
            </span>

            <div className="c-footer__address" data-testid='address'>
              <div>{street_1} {street_2}</div>
              <div>{city} {state_province} {postal_code}</div>
            </div>

            <Link
              className="c-footer__phone c-footer__inner-link c-link c-link--white"
              href={`tel:${phone_number}`}
              data-testid='phone'
            >
              {phone_number}
            </Link>
          </div>

          {main_content && main_content[0] && <div className="c-footer__columns">
            <div className="c-footer__column-1">
              {column_1.visible && <h3 className="c-footer__column-title">{column_1.title}</h3>}
              {
                column_1.visible && (column_1.links || []).map((link, index: number) => {
                  return (
                    <LinkComponent
                      key={index}
                      link={link}
                      className="c-footer__inner-link c-link c-link--white"
                    />
                  )
                })
              }
            </div>
            <div className="c-footer__column-2">
              {column_2.visible && <h3 className="c-footer__column-title">{column_2.title}</h3>}
              {
                column_2.visible && (column_2.links || []).map((link, index: number) => {
                  return (
                    <LinkComponent
                      key={index}
                      link={link}
                      className="c-footer__inner-link c-link c-link--white"
                    />
                  )
                })
              }
            </div>
          </div>}
        </div>
        <div className="c-footer__rights">
          <div className="c-footer__rights-type" data-testid='copyright'>{copyright}</div>
          <div className="c-footer__rights-links">
            {
              (utility_navigation || []).map((link, index: number) => {
                return (
                  <LinkComponent
                    key={index}
                    link={link}
                    className="c-link c-footer__rights-link"
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    </footer>
  )
}
