<script lang="ts" setup>
import { ref } from "vue";
import type { ButtonPropsInterf } from "./types";
import EIcon from "../Icon/E-Icon.vue";

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
      'is-loading': loading,
    }"
    :disabled="disabled || loading"
    :autofocus="autofocus"
  >
    <EIcon v-if="loading" icon="spinner" spin />
    <EIcon v-if="icon" :icon="icon" />
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped></style>
