<script lang="ts" setup>
import { ref } from "vue";
import type { TooltipProps, TooltipEmits, TooltipInstance } from "./types";
import useClickOutside from "@/hooks/useClickOutside";
import useBaseFeature from "./useBaseFeature";

const props = withDefaults(defineProps<TooltipProps>(), {
  content: "tooltip content",
  placement: "bottom",
  trigger: "hover",
  transition: "fade",
  openDelay: 0,
  closeDelay: 0,
});
const emits = defineEmits<TooltipEmits>();

// useBaseFeature
const {
  isOpen,
  openDebounce,
  closeDebounce,
  events,
  events_outer,
  popperNode,
  triggerNode,
} = useBaseFeature(props, emits);

const wrapperEl = ref<HTMLElement>();
useClickOutside(wrapperEl, () => {
  if (!props.manual && props.trigger === "click" && isOpen.value) {
    closeDebounce();
  }
});

//
defineExpose<TooltipInstance>({
  show: openDebounce,
  hide: closeDebounce,
});
</script>

<template>
  <div ref="wrapperEl" class="e-tooltip" v-on="events_outer">
    <div ref="triggerNode" class="e-tooltip__trigger" v-on="events">
      <slot />
    </div>
    <Transition :name="transition">
      <div ref="popperNode" class="e-tooltip__popper" v-if="isOpen">
        <slot name="content">{{ content }}</slot>
      </div>
    </Transition>
  </div>
</template>

<style scoped></style>
