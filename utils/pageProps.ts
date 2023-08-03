import { getObjWithoutCircular, mergeDeep } from '@/utils';
import { Context } from '@/types';

export const complexRequest = (settings: any, errors: any) => {
  const result: any = { ...settings };
  const requests: any = [];

  const processObj = (obj: any, result: any) => {
    if (!obj || typeof obj !== 'object') {
      return
    }
    Object.entries(obj)
      .forEach(([key, value]: any) => {
        if (value instanceof Promise) {
          requests.push(value
            .then((res: any) => {
              result[key] = res;
            })
            .catch(error => {
              errors[key] = error.response
                ? getObjWithoutCircular(error.response).data
                : {
                  ...error,
                  message: error.message,
                  stack: error.stack,
                };

              delete result[key];

              if (error.response) {
                const { status, statusText } = error.response;
                console.log('<= Error =>', key, { status, statusText })
              } else {
                console.log('<= Error =>', key, error)
              }

            })
          )

        } else {
          processObj(value, result[key])
        }
      });
  }

  processObj(settings, result)

  return Promise.all(requests.filter(Boolean))
    .then(() => {
      return result;
    });
};

const checkIfAuthorized = (context: Context) => {
  return Boolean(context.req.cookies && context.req.cookies.access_token);
}

export const getRedirectAccordingToAuthorization = (context: any) => {
  if (!context) {
    throw new Error('Context must be provided!')
  }

  const isAuthorized = checkIfAuthorized(context);

  const isPageForAuthorizedOnly = () => {
    if (context.resolvedUrl.startsWith('/guest')) {
      return false
    }

    return true
  };

  if (['/legal', '/careers', '/copyright', '/guest/visit-the-dac'].includes(context.resolvedUrl)) {
    return false
  }

  if (['/development'].some((el) => {
    return context.resolvedUrl.startsWith(el)
  })) {
    return false
  }

  if (!isPageForAuthorizedOnly() && isAuthorized) {
    // return {
    //   redirect: {
    //     destination: '/',
    //     permanent: false,
    //   },
    // };
  }

  if (isPageForAuthorizedOnly() && !isAuthorized) {
    // return {
    //   redirect: {
    //     destination: '/',
    //     permanent: false,
    //   },
    // };
  }
}

const getCommonProps = (isAuthorized: boolean) => ({
  contentStack: {
  },
  isAuthorized: !!isAuthorized,
})

export const getPageProps = (object: any) => {
  // const redirect = getRedirectAccordingToAuthorization(object.context);

  // if (redirect) {
  //   return redirect;
  // }

  object.context = getObjWithoutCircular(object.context).data

  const errors: any = {};
  // const isAuthorized = checkIfAuthorized(object.context);
  const isAuthorized = true;

  return complexRequest(mergeDeep(object, getCommonProps(isAuthorized)), errors)
    .then((result) => {
      return complexRequest(result, errors)
    })
    .then((result) => {
      return complexRequest(result, errors)
    })
    .then(res => {

      if (Object.entries(errors).some(([key, value]: any) => value.status === 401)) {
        return {
          redirect: {
            destination: '/guest/login',
            permanent: false,
          },
        };
      }

      return {
        props: {
          ...res,
          env: process.env.ENVIRONMENT,
          management: process.env.LIVE_PREVIEW_MANAGEMENT_TOKEN,
          errors,
        },
      };
    })
    .catch();
};
