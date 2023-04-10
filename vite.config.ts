/*
 * @Author: ZhangYi 840271360@qq.com
 * @Date: 2023-04-10 13:59:31
 * @LastEditors: ZhangYi 840271360@qq.com
 * @LastEditTime: 2023-04-10 14:15:06
 * @FilePath: /colorful-log/vite.config.ts
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    target: 'modules',
    outDir: 'dist',
    minify: false,
    rollupOptions: {
      input: ['src/index.ts'],
      output: [{
        format: 'es',
        entryFileNames: '[name].js',
        preserveModules: true,
        dir: 'es',
        preserveModulesRoot: 'src'
      }, {
        format: 'cjs',
        entryFileNames: '[name].js',
        preserveModules: true,
        dir: 'lib',
        preserveModulesRoot: 'src'
      }]
    },
    lib: {
      entry: './index.ts',
      formats: ['es', 'cjs']
    },
  },
  plugins: [react()],
})
