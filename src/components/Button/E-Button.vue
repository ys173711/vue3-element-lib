<script lang="ts" setup>
import { ref } from "vue";
import type { ButtonPropsInterf } from "./types";

defineOptions({ name: "EButton" });

withDefaults(defineProps<ButtonPropsInterf>(), {
  nativeType: "button",
});

const _ref = ref<HTMLButtonElement>();
defineExpose({
  el: _ref,
});
</script>

<template>
  <button
    ref="_ref"
    class="e-button"
    :class="{
      [`e-button--${type}`]: type,
      [`e-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
    }"
    :disabled="disabled"
    :autofocus="autofocus"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped></style>
