import { computed, onUnmounted, reactive, ref, watch, watchEffect } from "vue";
import { createPopper } from "@popperjs/core";
import type { Instance } from "@popperjs/core";
import type { TooltipProps, TooltipEmits } from "./types";
import { debounce } from "lodash-es";

const useBaseFeature = (props: TooltipProps, emits: TooltipEmits) => {
  const popperNode = ref<HTMLElement>();
  const triggerNode = ref<HTMLElement>();
  const isOpen = ref(false);
  let popperInstance: Instance | null = null;
  // merge options
  const options = computed(() => {
    return {
      placement: props.placement,
      ...props.options,
    };
  });
  watch(
    [isOpen, options],
    (newValArr) => {
      if (newValArr[0]) {
        if (triggerNode.value && popperNode.value) {
          popperInstance = createPopper(
            triggerNode.value,
            popperNode.value,
            options.value,
          );
        } else {
          popperInstance?.destroy();
        }
      }
    },
    { flush: "post" },
  );
  //
  const openCount = ref(0);
  const closeCount = ref(0);

  const open = () => {
    openCount.value++;
    console.log("openCount", openCount.value);
    isOpen.value = true;
    emits("visible-change", isOpen.value);
  };
  const close = () => {
    closeCount.value++;
    console.log("closeCount", closeCount.value);
    isOpen.value = false;
    emits("visible-change", isOpen.value);
  };
  const openDebounce_ = debounce(open, props.openDelay);
  const closeDebounce_ = debounce(close, props.closeDelay);
  // 优化
  const openDebounce = () => {
    closeDebounce_.cancel();
    openDebounce_();
  };
  const closeDebounce = () => {
    openDebounce_.cancel();
    closeDebounce_();
  };
  const toggle = () => {
    if (isOpen.value) {
      closeDebounce();
    } else {
      openDebounce();
    }
  };
  let events: Record<string, any> = reactive({});
  let events_outer: Record<string, any> = reactive({});
  const attachEvents = () => {
    if (props.trigger === "hover") {
      events.mouseenter = openDebounce;
      events_outer.mouseleave = closeDebounce;
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

  return {
    isOpen,
    openDebounce,
    closeDebounce,
    events,
    events_outer,
    popperNode,
    triggerNode,
  };
};

export default useBaseFeature;
