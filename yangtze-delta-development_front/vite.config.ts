import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
// https://vitejs.dev/config/

function resolve(dir: string) {
  return path.join(__dirname, dir);
}

export default defineConfig({
  base: "./", //等同于  assetsPublicPath :'./'
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('src'),
    }
  },
  server: {
    proxy: {
      '/vec_w': {
        target: 'http://t0.tianditu.gov.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/vec_w/, '/vec_w'), 
      },
      '/cva_w': {
        target: 'http://t0.tianditu.gov.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/cva_w/, '/cva_w'), 
      },
    },
  },
})
