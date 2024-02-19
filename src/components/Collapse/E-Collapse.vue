<script lang='ts' setup>
import { ref } from 'vue'
import type { NameTyp } from './types'

defineOptions({name: 'ECollapse'})

// 保存<CollapseItem>的展开状态
const activeNames = ref<NameTyp[]>([])
const handleItemClick = (name: NameTyp) => {
  const index = activeNames.value.indexOf(name)
  if (index === -1) {
    activeNames.value.push(name)
  } else {
    activeNames.value.splice(index, 1)
  }
}
</script>

<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>

</style>