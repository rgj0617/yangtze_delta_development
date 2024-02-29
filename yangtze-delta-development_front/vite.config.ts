import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
// https://vitejs.dev/config/

function resolve(dir: string) {
  return path.join(__dirname, dir);
}

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('src'),
    }
  },
  plugins: [vue()],
})
