import axios from 'axios';
import qs from 'querystring';

import { hostURL, authAPIKey, functionBaseUrl, memberAPIKey } from '@/constants'
import { appState } from '@/store'
import { logout } from '@/services'

const defaultTimeout = 30000;

const commonSettings = {
  method: 'get',
  data: null,
  timeout: defaultTimeout,
  params: {},
  withCredentials: false,
  config: {},
}

const apiSettings = {
  ...commonSettings,
  baseURL: functionBaseUrl + '/api/functions',
  headers: {},
  getAuthHeaders: (ctx: any) => {
    const { cookies } = ctx.req;
    const { access_token } = cookies;

    return {
      SessionKey: access_token || '',
      'X-APIKEY': memberAPIKey,
    }
  },
}

const clientApiSettings = {
  ...apiSettings,
  baseURL: '/api/functions',
}

const authSettings = {
  ...commonSettings,
  baseURL: hostURL,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'X-APIKEY': authAPIKey,
  },
  getAuthHeaders: () => ({}),
}

export const getRequest = (defaultSettings: any) => (settings: any) => {

  const mergedSettings = {
    ...defaultSettings,
    ...settings,
  }

  const {
    method,
    url,
    baseURL,
    data,
    headers,
    timeout,
    params,
    withCredentials,
    config,
    getAuthHeaders,
  } = mergedSettings;

  const instance = axios.create({
    baseURL: baseURL || '',
    headers: {
      ...defaultSettings.headers,
      headers,
      ...getAuthHeaders(settings.context)
    },
    timeout,
    withCredentials,
    paramsSerializer: (params1: any): string => qs.stringify(params1),
    ...config,
  });

  return instance.request({ url, method, params, data })
    .then(({ data: res }: any) => res);
};

export const authRequest = getRequest(authSettings);
export const request = getRequest(apiSettings);
export const clientApiRequest = getRequest(clientApiSettings);

export const withLoaderAndErrorHandling = (promise: any) => {
  appState.setLoadingState(true);

  return promise
    .catch((err: any) => {
      if (err.response.status === 401){
        logout();
      } else {
        return appState.showErrorNotification(err.message);
      }
    })
    .then(() => appState.setLoadingState(false))
}

