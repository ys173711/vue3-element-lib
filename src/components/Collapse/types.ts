import type { Ref, InjectionKey } from "vue";


// <ECollapseItem>的props
export interface CollapseItemProps {
  name: string | number;
  title?: string;
  disabled?: boolean;
}
export type NameTyp = CollapseItemProps['name']

// <ECollapse>通过slot传给<ECollapseItem>的ctx
export interface CollapseContext<T> {
  activeName: Ref<T>[];
  handleItemClick: (name: T) => void;
}
export const collapseContextKey: InjectionKey<CollapseContext<NameTyp>> = Symbol("ECollapseContext");
// : InjectionKey<CollapseContext<string | number>>



