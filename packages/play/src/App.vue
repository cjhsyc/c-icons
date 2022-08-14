<script setup lang="ts">
import { Bofang, CIcon, Dianzan, Liebiao, Shezhi, Shipin } from '@cjhsyc/icons'
import '@cjhsyc/icons/style'
</script>

<template>
  <shipin />
  <bofang width="200" height="200" color="orange" />
  <i style="font-size: 150px; color: skyblue">
    <dianzan />
  </i>
  <c-icon :size="300" color="pink">
    <liebiao />
  </c-icon>
  <c-icon class="loading">
    <shezhi />
  </c-icon>
</template>
