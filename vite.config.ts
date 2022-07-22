import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';


function resolvePath(paths) {
  return path.resolve(__dirname, paths);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),eslintPlugin()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@views':resolvePath("./src/views")
    }
  },
  base: './', // 打包路径
  server: {
    port: 3008, // 服务端口号
    open: true, // 服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    proxy: {
      '/api': {
        target: 'http://www.xxxx.com.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace('/api', '')
      }
    }
  }
})
