/// <reference types="next" />
/// <reference types="next/types/global" />

import 'styled-components';
import { PaninoTheme } from './src/styles/theme';

declare namespace NodeJS {
  interface ProcessEnv {
    FIREBASE: {
      API_KEY: string;
      PROJECT_ID: string;
      AUTH_DOMAIN: string;
      DATABASE_URL: string;
      STORAGE_BUCKET: string;
      PRIVATE_KEY: string;
      CLIENT_EMAIL: string;
    };
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends PaninoTheme {}
}
