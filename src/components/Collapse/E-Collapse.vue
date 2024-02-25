<script lang="ts" setup>
import type { CollapseProps, NameTyp } from "./types";
import { useCollapse } from "./useCollapse";

defineOptions({ name: "ECollapse" });

const props = defineProps<CollapseProps>();

// 保存<CollapseItem>的展开状态, 用于控制展开/收起, 手风琴模式
const activeNames = defineModel<NameTyp[]>({ default: [] });
useCollapse(activeNames, props);
</script>

<template>
  <div class="e-collapse">
    <slot></slot>
  </div>
</template>

<style scoped></style>
