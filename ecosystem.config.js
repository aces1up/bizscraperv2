module.exports = {
  apps: [
    {
      name: 'bizscraper',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 4995
      },
    },
  ],
};