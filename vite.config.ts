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
