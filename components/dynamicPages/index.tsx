import React, { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { format } from 'date-fns';

import { getPageProps } from '@/utils';
import { usePageProps } from '@/hooks';
import { getPageEntityUsingSDK, getContentstackContent } from '@/services';
import { getObjWithoutCircular } from '@/utils';
import { Context } from '@/types';
import { appState } from '@/store';


import {
  TemplateT1Dynamic,
  TemplateT4Dynamic,
  TemplateT5Dynamic,
  TemplateT6Dynamic,
  TemplateT13Dynamic,
} from './templates';

export const DynamicPage = () => {
  const { contentStack, dynamicPageError, url } = usePageProps();

  const onLoginClick = () => {
    appState.routeAfterLogin = url || '/';
  }

  if (dynamicPageError) {
    return (
      <div>
        {dynamicPageError.message}
        <div><Link href='/' >Go To The Main Page</Link></div>
        {dynamicPageError.status === 401 && (
          <div>
            <Link onClick={onLoginClick} href='/guest/login'>
              Login
            </Link>
          </div>
        )}
        {((dynamicPageError && dynamicPageError.data) || []).map(({ content_type_uid, uid }: any) => {
          return <div style={{ margin: '2rem' }} key={uid}>
            <div>content_type_uid: {content_type_uid}</div>
            <div>uid: {uid}</div>
            <Link href='/' >Go To The Main Page</Link>
          </div>
        })}
      </div>
    )
  }

  const { pageData } = contentStack;

  const { content_type_uid, uid } = pageData;

  if (content_type_uid === 'page_type_1') {
    return <TemplateT4Dynamic />
  }


  return (
    <div>
      Unknown template
    </div>
  );
}

const checkIfAuthorized = (context: Context) => {
  return Boolean(context.req.cookies && context.req.cookies.access_token);
}

export const getDynamicServerSideProps: GetServerSideProps = async (context) => {
  const isAuthorized = checkIfAuthorized(context);

  return getPageEntityUsingSDK(context.resolvedUrl, isAuthorized)
    .then((res: any) => {
      const { data, error } = res;

      if (error) {
        return {
          props: {
            dynamicPageError: error,
            url: context.resolvedUrl,
          }
        }
      }

      const pageData = data[0];

      return getPageProps({
        contentStack: {
          pageData,
          global_settings: getContentstackContent('global_settings', 'blt563bde79f5f953fc'),
        },
        context,
      });
    })
    .catch((err: any) => {
      console.log('err')
      console.log(err)
      return {
        props: {
          pageDataError: getObjWithoutCircular(err)
        }
      }
    })


  // return getPageEntity(context.resolvedUrl)
  //   .then(({ data, error }: any) => {
  //     if (error) {
  //       return {
  //         props: {
  //           dynamicPageError: error,
  //           url: context.resolvedUrl,
  //         }
  //       }
  //     }

  //     const { content_type_uid, uid } = data;

  //     return getPageProps({
  //       contentStack: {
  //         pageData: getContentstackContent(content_type_uid, uid),
  //         pageDataSystem: data,
  //       },
  //       context,
  //     });
  //   })
  //   .catch((err: any) => {
  //     console.log('err')
  //     console.log(err)
  //     return {
  //       props: {
  //         pageDataError: getObjWithoutCircular(err)
  //       }
  //     }
  //   })
};
