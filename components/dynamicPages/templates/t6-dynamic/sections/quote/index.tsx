import React from 'react';

import { T6QuoteMainContent } from '@/types';

export const T6QuoteSection = ({ data }: any) => {
  const {
    visible,
    title,
    item,
  }: T6QuoteMainContent = data;

  if (!visible || !item || !item[0]) { return null }

  const { text, attribution } = item[0];

  return (
    <>
      <section data-testid='quote section'>
        <div className="p-template-6-quote c-quote">
          {title && <div className="p-template-6-quote__header c-quote__header" data-testid='quote title'>{title}</div>}
          <div className="c-quote__type" data-testid='quote text'>
            {text}
          </div>
          {/* this part is new in the quote component an it is optional */}
          {attribution && <div className="c-quote__signature" data-testid='quote attribution'>
            {attribution}
          </div>}
        </div>
      </section>
    </>
  )
}
