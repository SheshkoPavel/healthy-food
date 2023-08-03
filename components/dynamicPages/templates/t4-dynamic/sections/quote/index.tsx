import React from 'react';

import { T4QuoteMainContent } from '@/types';

export const T4QuoteSection = ({ data }: any) => {
  const {
    item,
    visible,
  }: T4QuoteMainContent = data;


  if (!visible || !item || !item[0]) { return null }

  const { text } = item[0];

  return (
    <>
      <section data-testid='quote section'>
        <div className="c-quote">
          <div className="c-quote__header c-quote__header--icon" />
          <div className="c-quote__type" data-testid='quote text'>
            {text}
          </div>
        </div>
      </section>
    </>
  )
}
