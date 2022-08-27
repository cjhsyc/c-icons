import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import Components from 'unplugin-vue-components/vite'
// import { CIconsResolver } from '@cjhsyc/icons'

export default defineConfig({
  plugins: [
    vue(),
    // Components({
    //   resolvers: CIconsResolver(),
    //   dts: './src/types/components.d.ts'
    // }),
  ],
})
