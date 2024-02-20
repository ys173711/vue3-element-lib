<script lang='ts' setup>
import { computed, inject,  } from 'vue'
import type { CollapseItemProps } from './types'
import { collapseContextKey } from './types'

defineOptions({name: 'ECollapseItem'})
const props = withDefaults(defineProps<CollapseItemProps>(), {
  title: 'Default Title',
})

const collapseContext = inject(collapseContextKey)
const isActive = computed(() => collapseContext?.activeNames.value.includes(props.name)
)
const handleClick = () => {
  if (props.disabled) return
  collapseContext?.handleItemClick(props.name)
}
</script>

<template>
  <div
    class="e-collapse-item"
    :class="{
      'is-disabled': disabled,
    }"
  >
    <div class="e-collapse-item__title" @click="handleClick">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="e-collapse-item__content" v-show="isActive">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>

</style>