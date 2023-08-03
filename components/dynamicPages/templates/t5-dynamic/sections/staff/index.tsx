import React from 'react';

import { CardImageComponent } from '@/components';
import { T5StaffMainContent } from '@/types';

export const T5StaffSection = ({ data }: any) => {
  if (!data) { return <div>Error get data from server</div> }

  const {
    visible,
    items = [],
    title,
  }: T5StaffMainContent = data;

  if (!visible) { return null }

  return (
    <section data-testid='staff section'>
      <div className="p-template-5-preview-cards">
        <h5 className="p-template-5-preview-cards__title" data-testid='staff title'>{title}</h5>
        <div className="p-template-5-preview-cards__listing">
          {
            items.map((contact, index: number) => {
              return (
                <div
                  key={index}
                  className="p-template-5-preview-cards__card c-content-card c-content-card--preview c-content-card--static"
                  data-testid='staff card'
                >
                  <span className="c-content-card__link">
                    <CardImageComponent
                      width={82}
                      height={82}
                      data={contact?.photo}
                    />
                  </span>
                  <div className="c-content-card__type-container">
                    <h3 className="c-content-card__type-title">{contact.name}</h3>
                    <p className="c-content-card__type-body">
                      {contact?.role}
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
