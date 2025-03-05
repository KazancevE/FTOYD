const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/fronttemp-service', // Префикс для запросов
    createProxyMiddleware({
      target: 'https://app.ftoyd.com', // Адрес API
      changeOrigin: true,
      secure: false, // Отключите проверку SSL (только для разработки)
    })
  );
};