<script lang='ts' setup>
import { ref } from 'vue'
import type { CollapseItemProps } from './types'

defineOptions({name: 'ECollapseItem'})
withDefaults(defineProps<CollapseItemProps>(), {
  title: 'Default Title',
})

const msg = ref('test')
</script>

<template>
  <div
    class="e-collapse-item"
    :class="{
      'is-disabled': disabled,
    }"
  >
    <div class="e-collapse-item__header">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="e-collapse-item__main">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>

</style>