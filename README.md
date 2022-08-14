# c-icons

基于vue3的svg图标组件库，支持ts类型检查。

## 使用

```bash
npm i @cjhsyc/icons
```

```vue
<script setup lang="ts">
import { CIcon, Film, Like, MusicList, Play, Settings } from '@cjhsyc/icons'
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

## 感谢

- 图标：[iconfont](https://www.iconfont.cn/collections/detail?cid=19171)

- [unplugin-icons](https://github.com/antfu/unplugin-icons)
