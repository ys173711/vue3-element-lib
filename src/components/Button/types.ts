type ButtonNativeTypeTyp = "button" | "submit" | "reset";
// 原生属性
interface ButtonNativePropsInterf {
  autofocus?: boolean;
  disabled?: boolean;

  // form?: string; // form相关

  name?: string;
  nativeType?: ButtonNativeTypeTyp;
  value?: string | string[] | number;
}

type ButtonTypeTyp = "primary" | "success" | "warning" | "danger" | "info";
type ButtonSizeTyp = "small" | "large";
export interface ButtonPropsInterf extends ButtonNativePropsInterf {
  type?: ButtonTypeTyp;
  size?: ButtonSizeTyp;
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  icon?: string;
  loading?: boolean;
}

export interface ButtonInstanceInterf {
  el: HTMLButtonElement;
}
