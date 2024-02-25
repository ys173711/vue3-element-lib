import { provide, ModelRef } from "vue";
import { collapseContextKey } from "./types";
import type { CollapseProps, NameTyp } from "./types";

export function useCollapse(
  activeNames: ModelRef<NameTyp[]>,
  props: CollapseProps,
) {
  if (props.accordion && activeNames.value.length > 1) {
    console.warn(
      "accordion mode, <ECollapse> modelValue can only have one value",
    );
  }
  let handleItemClick;
  if (props.accordion) {
    handleItemClick = (name: NameTyp) => {
      activeNames.value = activeNames.value[0] === name ? [] : [name];
    };
  } else {
    handleItemClick = (name: NameTyp) => {
      const index = activeNames.value.indexOf(name);
      if (index === -1) {
        activeNames.value.push(name);
      } else {
        activeNames.value.splice(index, 1);
      }
    };
  }

  provide(collapseContextKey, {
    activeNames,
    handleItemClick,
  });

  return {
    handleItemClick,
  };
}
