const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  distDir: isDev ? '.next' : 'dist/functions/next',
  webpack: (config) => {
    return config;
  },
};
