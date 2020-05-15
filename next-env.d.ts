/// <reference types="next" />
/// <reference types="next/types/global" />

declare var Kakao: any;

declare namespace NodeJS {
  interface ProcessEnv {
    BASE_DOMAIN: string;
    FIREBASE_API_KEY: string;
    FIREBASE_AUTH_DOMAIN: string;
    FIREBASE_DATABASE_URL: string;
    FIREBASE_PROJECT_ID: string;
    FIREBASE_STORAGE_BUCKET: string;
    FIREBASE_MESSAGING_SENDER_ID: string;
    FIREBASE_APP_ID: string;
    FIREBASE_MEASUREMENT_ID: string;
    FIERBASE_FUNCTIONS_DOMAIN: string;
    KAKAO_NATIVE_APP_KEY: string;
    KAKAO_REST_API_KEY: string;
    KAKAO_JAVASCRIPT_KEY: string;
    KAKAO_ADMIN_KEY: string;
  }
}
