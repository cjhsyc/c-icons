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
