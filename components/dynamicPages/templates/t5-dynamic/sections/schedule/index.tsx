import React from 'react';
import Link from 'next/link';

import { RichText, CTAComponent } from '@/components';
import { T5ScheduleMainContent } from '@/types';

export const T5ScheduleSection = ({ data }: any) => {
  if (!data) { return <div>Error get data from server</div> }

  const {
    visible,
    title,
    headline_copy,
    cta,
    contact_person = [],
    files = [],
    schedule = [],
  }: T5ScheduleMainContent = data;

  if (!visible) { return null }

  return (
    <section data-testid='schedule section'>
      <div className="p-template-5-2-columns">
        <div className="p-template-5-2-columns__column">

          <div className="c-subsection">
            <div className="c-subsection__header">
              <h2 className="c-subsection__header-title" data-testid='schedule title'>{title}</h2>
              <div className="c-subsection__header-description" data-testid='schedule description'>
                <RichText text={headline_copy} />
              </div>
            </div>
          </div>
          <div className="c-contact-information c-contact-information--vertical">
            <div className="c-contact-information__type-wrapper">
              {contact_person.map((contact, index: number) => {
                const {
                  email_address,
                  name,
                  phone_number,
                  role,
                } = contact;

                return (
                  <div className="c-contact-information__section" key={index} data-testid='schedule contact'>
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
        </div>

        <div className="p-template-5-2-columns__column p-template-5-2-columns__column--right">

          <div className="c-details">
            {/* next title may be missing */}
            {/* <h3 className="c-details__title">Days & Hours</h3> */}
            {/* next section can repeat */}

            {schedule.map((item, index: number) => {
              return (
                <div key={index} className="c-details__subsection" data-testid='schedule details'>
                  <h5 className="c-details__subtitle">{item.title}</h5>
                  <div className="c-details__subsection-content">
                    {(item.entries || []).map((entry, index: number) => {
                      return <div className="c-details__subsection-row" key={index}>
                        <div className="c-details__subsection-column c-details__subsection-column--left">
                          {entry.day}
                        </div>
                        <div className="c-details__subsection-column c-details__subsection-column--right">
                          {entry.time}
                        </div>
                      </div>
                    })}
                  </div>
                </div>
              )
            })}
          </div>

          {files.map((item, index: number) => {
            return (
              <div key={index} className="c-subsection__headline" data-testid='schedule files'>
                <h3 className="c-subsection__headline-subtitle">{item.primary}</h3>
                <div className="c-subsection__headline-description">
                  <RichText text={item.primary_copy} />
                </div>
                {item.file && <Link
                  href={item.file.url}
                  className="c-subsection__headline-link c-link c-link--icon c-link--icon-download"
                  target='_blank'
                >Download</Link>}
              </div>
            )
          })}

        </div>
      </div>

      <div className="p-template-5-cta" data-testid='schedule cta'>
        <CTAComponent data={cta} />
      </div>
    </section>
  )
}
