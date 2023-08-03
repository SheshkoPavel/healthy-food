import { makeAutoObservable } from 'mobx'

class NavbarState {
  hoveredItem: any = null;
  hoveredMobileItem: any = null;
  isShowMobileMenu = false;
  isAccountMenuOpen = false;

  constructor() {
    makeAutoObservable(this);
  }

  init(){
    console.log('init')
    this.hoveredItem = null;
    this.hoveredMobileItem = null;
    this.isShowMobileMenu = false;
    this.isAccountMenuOpen = false;
  }

  setHoveredItem(value: any) {
    this.hoveredItem = value;
  }

  setHoveredMobileItem(value: any) {
    this.hoveredMobileItem = value;
  }

  setShowMobileMenu(value: boolean) {
    this.isShowMobileMenu = value;
  }


  toggleMobileMenu() {
    this.isShowMobileMenu = !this.isShowMobileMenu;
  }

  setIsAccountMenuOpen(value: boolean) {
    this.isAccountMenuOpen = value;
  }

  toggleIsAccountMenuOpen() {
    this.isAccountMenuOpen = !this.isAccountMenuOpen;
  }
}

export const navbarState = new NavbarState();
