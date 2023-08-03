declare namespace NodeJS {
    export interface ProcessEnv {
      readonly CONTENTSTACK_API_KEY: string;
      readonly DELIVERY_TOKEN: string;
      readonly ENVIRONMENT: string;
      readonly LIVE_PREVIEW_HOST: string;
      readonly LIVE_PREVIEW_MANAGEMENT_TOKEN: string;
      readonly LIVE_PREVIEW_ENABLE: boolean;
    }
  }
