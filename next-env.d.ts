/// <reference types="next" />
/// <reference types="next/types/global" />

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
