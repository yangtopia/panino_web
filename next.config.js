const withSass = require('@zeit/next-sass');
const isDev = process.env.NODE_ENV !== 'production';

const { parsed: env } = require('dotenv').config({
  path: isDev ? './.env.dev' : './.env'
});

module.exports = withSass({
  distDir: isDev ? '.next' : 'dist/functions/next',
  env: {
   ...env
  },
  webpack: (config) => {
    return config;
  },
});
