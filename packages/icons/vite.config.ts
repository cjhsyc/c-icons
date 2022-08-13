import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: '@cjhsyc/icons',
      fileName: (format) => `icons.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue(),
    Icons({
      compiler: 'vue3',
      customCollections: {
        c: FileSystemIconLoader('./src/svg', (svg) =>
          svg
            .replace(/#111111/g, 'currentColor')
            .replace(/width="\d*?"|height="\d*?"|class=".*?"/g, '')
        ),
      },
      scale: 1,
    }),
  ],
})
