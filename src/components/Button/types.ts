type ButtonTypeTyp = 'primary' | 'success' | 'warning' | 'danger' | 'info'
type ButtonSizeTyp = 'small' | 'medium' | 'large'

export interface ButtonProps {
  type?: ButtonTypeTyp
  size?: ButtonSizeTyp
  plain?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
  
}