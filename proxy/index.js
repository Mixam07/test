import { createProxyMiddleware } from 'http-proxy-middleware';

export default createProxyMiddleware({
  target: 'http://209.38.195.221:3000',
  changeOrigin: true,
  pathRewrite: { '^/api': '' },
});