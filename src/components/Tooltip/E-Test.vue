<script lang="ts" setup>
import { ref } from "vue";
import ETooltip from "@/components/Tooltip/E-Tooltip.vue";
import type { TooltipInstance } from "@/components/Tooltip/types";

const msg = ref("<E-Tooltip>");

const tooltip = ref<TooltipInstance>();
const open = () => {
  tooltip.value?.show();
};
const close = () => {
  tooltip.value?.hide();
};

//
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <ETooltip content="hello world!" placement="right-end" trigger="hover">
      <div class="box">box</div>
      <template #content>
        <h3>tooltip h3</h3>
      </template>
    </ETooltip>
    <hr />
    <ETooltip content="hello world!" placement="top" trigger="click">
      <div class="box">box</div>
      <template #content>
        <h2>tooltip h2</h2>
      </template>
    </ETooltip>
    <hr />
    <ETooltip
      ref="tooltip"
      content="hello world!"
      placement="top"
      trigger="click"
      manual
    >
      <div class="box">box</div>
      <template #content>
        <h2>tooltip h2</h2>
      </template>
    </ETooltip>
    <button @click="open">打开tooltip</button>
    <button @click="close">关闭tooltip</button>
  </div>
</template>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: #f00;
}
</style>
