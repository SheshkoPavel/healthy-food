import React, { Fragment } from 'react';
import Link from 'next/link';

import { usePageProps } from '@/hooks';
import { T13DetailWithMenuDynamic } from '@/types';

export const T13OverviewSection = () => {
  const { contentStack } = usePageProps();
  const { pageData } = contentStack;

  if (!pageData) { return <div>Error get data from server</div> }

  const {
    overview,
    overview: {
      visible,
      title,
      anchor_links = [],
    },
  }: T13DetailWithMenuDynamic = pageData;

  if (!visible) { return null }

  return (
    <section data-testid='overview section'>
      <div className="p-template-13-overview">
        {/* TODO, we need this?  */}
        {/* <div className="p-template-13-overview__actions">
          <div className="p-template-13-overview__action c-icon c-icon--like" />
          <div className="p-template-13-overview__action c-icon c-icon--share" />
        </div> */}

        <h1 className="p-template-13-overview__title" data-testid='overview title'>{title}</h1>

        <div className="p-template-13-overview__tags">
          {
            anchor_links.map((tag, index: number) => {
              return (
                <Fragment key={index}>
                  {tag.href && <Link href={tag.href} className="p-template-13-overview__tag c-link" data-testid='overview tag'>{tag.title}</Link>}
                  {index < (anchor_links.length - 1) ? <span className="p-template-13-overview__tag-delimiter">&middot;</span> : null}
                </Fragment>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}
