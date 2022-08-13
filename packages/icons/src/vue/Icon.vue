<template>
  <i class="c-icon" :style="style" :v-bind="$attrs">
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
