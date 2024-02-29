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
        <span>tooltip</span>
      </template>
    </ETooltip>
    <hr />
    <ETooltip content="hello world!" placement="top" trigger="click">
      <div class="box">box</div>
      <template #content> tooltip h2 </template>
    </ETooltip>
    <hr />
    <div style="padding-left: 200px">
      <ETooltip
        ref="tooltip"
        content="hello world!"
        trigger="click"
        manual
        placement="bottom-start"
      >
        <div
          class="box"
          style="background-color: white; border: 1px solid green"
        >
          box
        </div>
        <template #content> tooltip h2 </template>
      </ETooltip>
    </div>
    <button @click="open">打开tooltip</button>
    <button @click="close">关闭tooltip</button>
    <hr />
    <ETooltip
      content="hello world!"
      placement="right"
      trigger="click"
      :options="{ placement: 'right-end', strategy: 'fixed' }"
      transition="fade"
    >
      <div class="box">box</div>
      <template #content>
        <h2>tooltip h2</h2>
      </template>
    </ETooltip>
    <hr />
    <ETooltip
      content="hello world!"
      placement="right"
      trigger="hover"
      :open-delay="1000"
      :close-delay="1000"
    >
      <div class="box" style="background-color: green">box</div>
      <template #content>
        <h3>tooltip h3</h3>
      </template>
    </ETooltip>
  </div>
</template>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: #f00;
}
</style>
