<template>
  <i class="c-icon" :style="style">
    <slot />
  </i>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { computed } from 'vue'

type Props = {
  size?: number
  color?: string
}

const props = defineProps<Props>()

const style = computed<CSSProperties>(() => {
  const color = props.color ? { color: props.color } : {}
  const fontSize = props.size ? { fontSize: `${props.size}px` } : {}
  return Object.assign(color, fontSize)
})
</script>

<script lang="ts">
export default {
  name: 'CIcon',
}
</script>

<style>
.c-icon {
  display: inline-flex;
}

.c-icon.loading {
  animation: rotating 2s linear infinite;
}

@keyframes rotating {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
}
</style>
