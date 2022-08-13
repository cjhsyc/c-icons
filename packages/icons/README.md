# c-icons

基于vue3的svg图标组件库，支持ts类型检查。

## 使用

```bash
npm i @cjhsyc/icons
```

```vue
<script setup lang="ts">
import { Bofang, CIcon, Dianzan, Liebiao, Shezhi } from '@cjhsyc/icons'
</script>

<template>
  <shezhi />
  <bofang width="200" height="200" color="orange" />
  <i style="font-size: 150px; color: skyblue">
    <dianzan />
  </i>
  <c-icon :size="300" color="pink">
    <liebiao />
  </c-icon>
</template>
```

## 感谢

- 图标：[iconfont](https://www.iconfont.cn/collections/detail?cid=19171)

- [unplugin-icons](https://github.com/antfu/unplugin-icons)
