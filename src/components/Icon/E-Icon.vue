<script lang="ts" setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import type { FontAwesomeIconProps_ } from "./types";
import type { FontAwesomeIconProps_temp } from "./types";
import { omit } from "lodash-es";
import { computed } from "vue";

defineOptions({ name: "EIcon" });
// 目前setup不支持TS复杂类型FontAwesomeIconProps_, 目前我们只能手动定义
// defineProps<FontAwesomeIconProps_>();
const props = defineProps<FontAwesomeIconProps_temp>();

// 优化: 过滤掉不需要的props
const filteredProps = computed(() => omit(props, ["type", "color"]));

//
</script>

<template>
  <i
    class="e-icon"
    :class="{ [`e-icon-${type}`]: type }"
    :style="{ color: color }"
  >
    <FontAwesomeIcon v-bind="filteredProps" />
  </i>
</template>

<style scoped></style>
