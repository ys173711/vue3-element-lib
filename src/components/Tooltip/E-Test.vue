<script lang="ts" setup>
import { ref } from "vue";
import ETooltip from "@/components/Tooltip/E-Tooltip.vue";

const msg = ref("<E-Tooltip>");
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <ETooltip content="hello world!" placement="right-start" trigger="click">
      <div class="box">box</div>
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
