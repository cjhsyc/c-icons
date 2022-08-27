<template>
  <div class="all">
      <div class="one" v-for="icon in Icons" :key="icon.name" :title="icon.name">
        <c-icon :size="96">
          <component :is="icon"></component>
        </c-icon>
        <span class="name">{{ icon.name }}</span>
      </div>
  </div>
</template>

<script setup lang="ts">
import { Icons } from '@cjhsyc/icons'
import CIcon from '@cjhsyc/icons'
import '@cjhsyc/icons/style'
</script>

<style scoped>
.all {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}
.one {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #eee;
}
.name {
  margin: 0;
  font-size: 16px;
  white-space: nowrap;
}
</style>
