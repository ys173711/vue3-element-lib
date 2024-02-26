import { onUnmounted, reactive, ref, watch, watchEffect } from "vue";
import { createPopper } from "@popperjs/core";
import type { Instance } from "@popperjs/core";
import type { TooltipProps, TooltipEmits } from "./types";

const useBaseFeature = (props: TooltipProps, emits: TooltipEmits) => {
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
  const resetEvents = () => {
    events.mouseenter = undefined;
    events_outer.mouseleave = undefined;
  };
  watchEffect(() => {
    if (props.manual) {
      resetEvents();
    } else {
      attachEvents();
    }
  });
  watch(
    () => props.trigger,
    (newVal, oldVal) => {
      if (newVal === oldVal) return;
      resetEvents();
      attachEvents();
    },
  );

  // 优化
  onUnmounted(() => {
    popperInstance?.destroy();
  });

  return { isOpen, open, close, events, events_outer, popperNode, triggerNode };
};

export default useBaseFeature;
