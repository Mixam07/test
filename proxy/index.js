import { createProxyMiddleware } from 'http-proxy-middleware';

export const config = {
  api: {
    bodyParser: false
  }
};

const proxy = createProxyMiddleware({
  target: 'http://209.38.195.221:3000',
  changeOrigin: true,
  pathRewrite: {
    '^/api': ''
  }
});

export default function handler(req, res) {
  return proxy(req, res, () => {});
}
