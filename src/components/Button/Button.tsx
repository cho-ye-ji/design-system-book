import { type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import { buttonVariants } from './buttonVariants'

interface IconProps {
  size?: number
  color?: string
  className?: string
}

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  label?: string
  leftIcon?: React.ComponentType<IconProps>
  rightIcon?: React.ComponentType<IconProps>
  iconOnly?: boolean
  onClick?: () => void
  disabled?: boolean
}

function Button({
  label,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  iconOnly = false,
  onClick,
  disabled = false,
  variant,
  size = 'md',
}: ButtonProps) {
  // excel은 아이콘 색만 따로 지정 (텍스트는 #555, 아이콘은 초록)
  const iconColor = variant === 'excel'
    ? (disabled ? '#ccc' : '#4DA542')
    : undefined  // undefined = currentColor (텍스트 색 따라감)

  const iconSize = variant === 'ghost' ? 10 : 16

  return (
    <button
      className={cn(
        buttonVariants({ variant, size, disabled }),
        iconOnly && `btn-${size}-circle`,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {LeftIcon && <LeftIcon size={iconSize} color={iconColor} />}
      {!iconOnly && label}
      {RightIcon && <RightIcon size={iconSize} color={iconColor} />}
    </button>
  )
}

export default Button
