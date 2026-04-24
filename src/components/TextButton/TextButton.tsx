import { type LucideIcon } from 'lucide-react'
import { cn } from '../../lib/utils'

interface TextButtonProps {
  label: string
  leftIcon?: LucideIcon
  rightIcon?: LucideIcon
  color?: 'brand' | 'gray'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  onClick?: () => void
}

function TextButton({
  label,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  color = 'brand',
  size = 'md',
  disabled = false,
  onClick,
}: TextButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center gap-1.5 bg-transparent border-none cursor-pointer font-medium transition-colors rounded px-2 py-1',
        color === 'brand'
          ? 'text-brand hover:bg-brand-light-hover'
          : 'text-text-gray hover:bg-gray-hover',
        size === 'sm' && 'text-xs',
        size === 'md' && 'text-sm',
        size === 'lg' && 'text-base',
        disabled && 'text-[#ccc] cursor-not-allowed hover:bg-transparent',
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {LeftIcon && <LeftIcon size={size === 'sm' ? 12 : size === 'lg' ? 18 : 14} />}
      {label}
      {RightIcon && <RightIcon size={size === 'sm' ? 12 : size === 'lg' ? 18 : 14} />}
    </button>
  )
}

export default TextButton
