import { makeAutoObservable } from 'mobx'

import { showErrorNotification, showSuccessNotification } from '@/components'

class AppState {
  modals: any[] = [];
  notifications: any[] = [];
  loading = false;
  context: any;
  routeAfterLogin = '/';

  userInfo: any = {};

  constructor() {
    makeAutoObservable(this)
  }

  openModal(modalContent: any, id: number = +new Date()) {

    const closeModal = () => {
      return this.modals = this.modals.filter((modal: any) => modal.id !== id);
    }

    const newModal = {
      modalContent,
      id,
      zIndex: 9001,
      closeModal,
    }

    this.modals = [...this.modals, newModal];

    return {
      closeModal
    }
  }

  closeModal(id: number) {
    return this.modals = this.modals.filter((modal: any) => modal.id !== id);
  }

  showErrorNotification(params: any){
    return showErrorNotification(params)
  }

  showSuccessNotification(params: any){
    return showSuccessNotification(params)
  }

  setLoadingState(loadingState: boolean) {
    this.loading = loadingState;
  }

  setUserInfo(userInfo: any) {
    this.userInfo = userInfo;
  }
}

export const appState = new AppState()
