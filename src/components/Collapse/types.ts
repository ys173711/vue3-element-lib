import type { Ref, InjectionKey } from "vue";

// <ECollapseItem>的props
export interface CollapseItemProps {
  name: string | number;
  title?: string;
  disabled?: boolean;
}
export type NameTyp = CollapseItemProps["name"];

// <ECollapse>通过slot传给<ECollapseItem>的ctx
export interface CollapseContext<T> {
  activeNames: Ref<T[]>;
  handleItemClick: (name: T) => void;
}
export const collapseContextKey = Symbol("ECollapseContext") as InjectionKey<
  CollapseContext<NameTyp>
>;

// <ECollapse>的props
export interface CollapseProps {
  modelValue: NameTyp[];
  accordion?: boolean;
}
export interface CollapseEmits {
  (e: "update:modelValue", val: NameTyp[]): void;
  (e: "change", val: NameTyp[]): void;
}
