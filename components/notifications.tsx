import { Store } from 'react-notifications-component';
import { ReactNotifications } from 'react-notifications-component'

import 'react-notifications-component/dist/theme.css'

export const showErrorNotification = (params: any) => {
  let title;
  let message;

  if (typeof params === 'string'){
    title = 'Error'
    message = params;
  } else {
    title = params.title;
    message = params.message;
  }

  Store.addNotification({
    title,
    message,
    type: 'danger',
    insert: 'top',
    container: 'top-right',
    animationIn: [],
    animationOut: [],
    dismiss: {
      duration: 5000,
      onScreen: true,
      showIcon: true,
      click: false,
    }
  });
}

export const showSuccessNotification = (params: any) => {
  let title;
  let message;

  if (typeof params === 'string'){
    title = 'Success'
    message = params;
  } else {
    title = params.title;
    message = params.message;
  }

  Store.addNotification({
    title,
    message,
    type: 'success',
    insert: 'top',
    container: 'top-right',
    animationIn: [],
    animationOut: [],
    dismiss: {
      duration: 5000,
      onScreen: true,
      showIcon: true,
      click: false,
    }
  });
}

export const Notifications = () => {
  return (
    <ReactNotifications />
  )
}
