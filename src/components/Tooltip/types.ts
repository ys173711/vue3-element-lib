import type { Placement, Options } from "@popperjs/core";

export interface TooltipProps {
  content?: string;
  trigger?: "hover" | "click";
  placement?: Placement;
  manual?: boolean;
  options?: Partial<Options>;
  transition?: string;
  openDelay?: number;
  closeDelay?: number;
}
export interface TooltipEmits {
  (e: "visible-change", val: boolean): void;
}

export interface TooltipInstance {
  show: () => void;
  hide: () => void;
}
