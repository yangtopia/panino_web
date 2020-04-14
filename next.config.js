const isDev = process.env.NODE_ENV !== 'production';

require('dotenv').config();

module.exports = {
  distDir: isDev ? '.next' : 'dist/functions/next',
  env: {
    FIREBASE: {
      API_KEY: process.env.FIREBASE_API_KEY,
      PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
      DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
      STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
      CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
    },
  },
  webpack: (config) => {
    return config;
  },
};
