import React from 'react';
import Link from 'next/link';

import { T6ContactInformationMainContent } from '@/types';

export const T6ContactSection = ({ data }: any) => {
  const {
    visible,
    title,
    item = [],
  }: T6ContactInformationMainContent = data;

  if (!visible) { return null }

  return (
    <>
      <section data-testid='contact section'>
        <div className="p-template-6-contact-information c-contact-information">
          <div className="c-contact-information__title" data-testid='contact title'>{title}</div>
          <div className="c-contact-information__type-wrapper">
            {item.map((contact, index: number) => {
              const {
                email_address,
                name,
                phone_number,
                role,
              } = contact;

              return (
                <div className="c-contact-information__section" key={index} data-testid='contact'>
                  <div className="c-contact-information__person">
                    {name && <div className="c-contact-information__name">{name}</div>}
                    {role && <div className="c-contact-information__position">{role}</div>}
                  </div>
                  {phone_number && <Link
                    className="c-contact-information__phone c-link"
                    href={`tel:${phone_number}`}
                  >
                    {phone_number}
                  </Link>}
                  {email_address && <Link
                    className="c-contact-information__email c-link c-link--icon-reverse c-link--icon-reverse-email"
                    href={`mailto:${email_address}`}
                    target="_blank"
                    data-testid='contact email'
                  >
                    {email_address}
                  </Link>}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
