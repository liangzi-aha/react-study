### proxy 代理配置 解决跨域问题
方法一：
package.josn 文件添加 "proxy": "https://tingapi.ting.baidu.com"
缺点：只能配置一个代理

方法二：
根据官网api;https://github.com/facebook/create-react-app/blob/master/docusaurus/docs/proxying-api-requests-in-development.md

安装 http-proxy-middleware,创建 src/setupProxy.js 文件，配置代理

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
  
  app.use(
        '/apc',
        createProxyMiddleware({
            target: 'https://test.zgbxjj.com',
            changeOrigin: true,
            pathRewrite: {
                "^/apc": ""
            },
        })
    );
};

