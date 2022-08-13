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
