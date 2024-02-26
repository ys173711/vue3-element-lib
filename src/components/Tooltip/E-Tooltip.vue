<script lang="ts" setup>
import { reactive, ref, watch } from "vue";
import type { TooltipProps, TooltipEmits } from "./types";
import { createPopper } from "@popperjs/core";
import type { Instance } from "@popperjs/core";
import useClickOutside from "@/hooks/useClickOutside";

const props = withDefaults(defineProps<TooltipProps>(), {
  content: "tooltip content",
  placement: "bottom",
  trigger: "hover",
});
const emits = defineEmits<TooltipEmits>();

// useBase
const popperNode = ref<HTMLElement>();
const triggerNode = ref<HTMLElement>();
const isOpen = ref(false);
let popperInstance: Instance | null = null;
watch(
  isOpen,
  (newVal) => {
    if (newVal) {
      if (triggerNode.value && popperNode.value) {
        popperInstance = createPopper(triggerNode.value, popperNode.value, {
          placement: props.placement,
        });
      } else {
        popperInstance?.destroy();
      }
    } else {
      popperInstance?.destroy();
    }
  },
  { flush: "post" },
);
//
const toggle = () => {
  isOpen.value = !isOpen.value;
  emits("visible-change", isOpen.value);
};
const open = () => {
  isOpen.value = true;
  emits("visible-change", isOpen.value);
};
const close = () => {
  isOpen.value = false;
  emits("visible-change", isOpen.value);
};
let events: Record<string, any> = reactive({});
let events_outer: Record<string, any> = reactive({});
const attachEvents = () => {
  if (props.trigger === "hover") {
    events.mouseenter = open;
    events_outer.mouseleave = close;
  } else if (props.trigger === "click") {
    events.click = toggle;
  }
};
attachEvents();
watch(
  () => props.trigger,
  (newVal, oldVal) => {
    if (newVal === oldVal) return;
    events = reactive({});
    events_outer = reactive({});
    attachEvents();
  },
);

const wrapperEl = ref<HTMLElement>();
useClickOutside(wrapperEl, () => {
  if (props.trigger === "click" && isOpen.value) {
    close();
  }
});

//
</script>

<template>
  <div ref="wrapperEl" class="e-tooltip" v-on="events_outer">
    <div ref="triggerNode" class="e-tooltip__trigger" v-on="events">
      <slot />
    </div>
    <div ref="popperNode" class="e-tooltip__popper" v-if="isOpen">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<style scoped></style>
