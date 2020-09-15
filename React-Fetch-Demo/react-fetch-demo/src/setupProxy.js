const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://test.zgbxjj.com',
            changeOrigin: true,
            pathRewrite: {
                "^/api": ""
            },
        })
    );
        
    app.use(
        '/apc',
        createProxyMiddleware({
            target: 'http://localhost:3100',
            changeOrigin: true,
            pathRewrite: {
                "^/apc": ""
            },
        })
    );
};