import { onMounted, onUnmounted } from "vue";
import type { Ref } from "vue";

const useClickOutside = (
  elementRef: Ref<HTMLElement | undefined>,
  cb: (e: MouseEvent) => void,
) => {
  const handler = (e: MouseEvent) => {
    if (elementRef.value && e.target) {
      if (!elementRef.value.contains(e.target as HTMLElement)) {
        cb(e);
      }
    }
  };

  onMounted(() => {
    document.addEventListener("click", handler);
  });

  onUnmounted(() => {
    document.removeEventListener("click", handler);
  });
};

export default useClickOutside;
