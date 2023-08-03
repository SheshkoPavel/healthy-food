import {
  T1PublicFacingHomeDynamic,
  T4SectionLandingPageDynamic,
  T5SectionSecondaryDynamic,
  T6InfoPageDynamic,
  T13DetailWithMenuDynamic,
  GlobalSettings,
} from '@/types'

export interface ContentStack {
  pageData:
    T1PublicFacingHomeDynamic
      & T4SectionLandingPageDynamic
      & T5SectionSecondaryDynamic
      & T6InfoPageDynamic
      & T13DetailWithMenuDynamic
  global_settings: GlobalSettings;
}
