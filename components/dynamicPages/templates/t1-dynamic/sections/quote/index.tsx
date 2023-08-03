import React from 'react';

import { T1QuoteMainContent } from '@/types';

export const T1QuoteSection = ({ data }: any) => {
  const {
    visible,
    title,
    item,
  }: T1QuoteMainContent = data;

  if (!visible) { return null }

  return (
    <section>
      <div className="p-template-1__quote" data-testid='quote section'>
        <div className="c-quote">
          {/* update quote - if it has background-image need to add className c-quote__header--icon, see at the pages t4 or common-t4 */}
          <div className="c-quote__header" data-testid='quote title'>{title}</div>
          <div className="c-quote__type" data-testid='quote text'>
            {item && item[0] && item[0].text}
          </div>
        </div>
      </div>
    </section>
  )
}
