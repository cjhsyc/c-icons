# c-icons

基于vue3的svg图标组件库，支持ts类型检查。

## 安装

```bash
# 使用npm
npm i @cjhsyc/icons
# 使用pnpm
pnpm add @cjhsyc/icons
```

## 手动导入

```vue
<script setup lang="ts">
import CIcon, { Film, Like, MusicList, Play, Settings } from '@cjhsyc/icons'
import '@cjhsyc/icons/style'
</script>

<template>
  <film />
  <play width="200" height="200" color="orange" />
  <i style="font-size: 150px; color: skyblue">
    <like />
  </i>
  <c-icon :size="300" color="pink">
    <music-list />
  </c-icon>
  <c-icon class="loading">
    <settings />
  </c-icon>
</template>
```

## 完整引入

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { Icons, CIcon } from '@cjhsyc/icons'
import '@cjhsyc/icons/style'

const app = createApp(App)
for (const [name, icon] of Object.entries(Icons)) {
  app.component(name, icon)
}
app.component(CIcon.name, CIcon)
app.mount('#app')
```

```vue
<template>
  <c-icon :size="100" color="gray">
    <mike />
  </c-icon>
</template>
```

## 自动导入

- 需要安装`unplugin-vue-components`

```bash
pnpm add -D unplugin-vue-components
```

- 在`vite.config.ts`中配置：

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { CIconsResolver } from '@cjhsyc/icons'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: CIconsResolver(),
      dts: './src/types/components.d.ts'
    }),
  ],
})
```

- 使用图标时加上前缀：`ci-`

```vue
<template>
  <c-icon :size="160">
    <ci-loop />
  </c-icon>
</template>
```

## 感谢

- 图标：[iconfont](https://www.iconfont.cn/collections/detail?cid=19171)

- [unplugin-icons](https://github.com/antfu/unplugin-icons)
