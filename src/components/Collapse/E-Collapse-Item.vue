<script lang="ts" setup>
import { computed, inject } from "vue";
import type { CollapseItemProps } from "./types";
import { collapseContextKey } from "./types";
import EIcon from "../Icon/E-Icon.vue";

defineOptions({ name: "ECollapseItem" });
const props = withDefaults(defineProps<CollapseItemProps>(), {
  title: "Default Title",
});

const collapseContext = inject(collapseContextKey);
const isActive = computed(() =>
  collapseContext?.activeNames.value.includes(props.name),
);
const handleClick = () => {
  if (props.disabled) return;
  collapseContext?.handleItemClick(props.name);
};

const transitionEvents: Record<string, (el: HTMLElement, done: any) => void> = {
  "before-enter": (el) => {
    el.style.height = "0";
  },
  enter: (el) => {
    el.style.height = el.scrollHeight + "px";
    el.style.overflow = "hidden";
  },
  "after-enter": (el) => {
    el.style.height = "";
  },
  "before-leave": (el) => {
    // if (el.scrollHeight !== 0) {
    el.style.height = el.scrollHeight + "px";
    // }
  },
  leave: (el) => {
    el.style.height = "0";
    el.style.overflow = "hidden";
  },
  "after-leave": (el) => {
    el.style.height = "";
  },
};
</script>

<template>
  <div
    class="e-collapse-item"
    :class="{
      'is-disabled': disabled,
      'is-active': isActive,
    }"
  >
    <div class="e-collapse-item__title" @click="handleClick">
      <slot name="title">{{ title }}</slot>
      <EIcon icon="angle-right" class="title-icon" />
    </div>
    <Transition name="slide" v-on="transitionEvents">
      <div v-show="isActive">
        <div class="e-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped></style>
