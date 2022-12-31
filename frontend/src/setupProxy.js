const { createProxyMiddleware } = require('http-proxy-middleware');

const setupApp = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:4000',
      changeOrigin: true,
    })
  );
};

export default setupApp;