import Link from 'next/link';

import { usePageProps } from '@/hooks';
import { RichText } from '@/components';
import { CTASimple, ICTADownload } from '@/types';

import { LinkComponent } from './linkComponent';

export const CTAComponent = ({ data, className = 'c-cta' }: any) => {
  if (!data || !data[0]) {
    return null;
  }

  const {
    _content_type_uid,
  } = data[0];

  if (_content_type_uid === 'cta') {
    return <CTA data={data} className={className} />
  }

  if (_content_type_uid === 'cta_downloadable') {
    return <CTADownload data={data} className={className} />
  }

  return null;
}

export const CTA = ({ data, className = 'c-cta' }: any) => {
  const { isAuthorized } = usePageProps();

  if (!data || !data[0]) {
    return null;
  }

  const {
    primary,
    primary_copy,
    link,
  }: CTASimple = data[0];

  if (!link || !link[0] || !link[0].abstract) {
    return null
  }

  if (!isAuthorized && !link[0].audience.type?.includes('Public')) {
    return null;
  }

  return (
    <div className={className} data-testid="cta simple">
      <div className="c-cta__type">
        <h5 className="c-cta__title">{primary}</h5>
        <div className="c-cta__description">
          <RichText text={primary_copy} />
        </div>
      </div>
      <LinkComponent
        className="c-cta__button c-button c-button--primary"
        link={link[0]}
      >
        <span className="c-button__label">{link[0].abstract?.link_title}</span>
      </LinkComponent>
    </div>
  )
}

export const CTADownload = ({ data, className = 'c-cta' }: any) => {
  if (!data || !data[0]) {
    return null;
  }

  const {
    primary,
    primary_copy,
    file,
  }: ICTADownload = data[0];


  if (!file || !file.url){
    return null;
  }

  return (
    <div className={className} data-testid="cta_downloadable">
      <div className="c-cta__type">
        <h5 className="c-cta__title">{primary}</h5>
        <div className="c-cta__description">
          <RichText text={primary_copy} />
        </div>
      </div>
      <Link
        className="c-cta__button c-button c-button--icon-download"
        href={file.url}
        target='_blank'
      >
        <span className="c-button__label">Download</span>
      </Link>
    </div>
  )
}
