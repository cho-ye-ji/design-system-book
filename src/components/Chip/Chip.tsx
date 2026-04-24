import { X } from 'lucide-react'
import { cn } from '../../lib/utils'

interface ChipProps {
  label: string
  variant?: 'filled' | 'outlined'
  removable?: boolean
  onRemove?: () => void
  disabled?: boolean
}

function Chip({
  label,
  variant = 'filled',
  removable = false,
  onRemove,
  disabled = false,
}: ChipProps) {
  return (
    <span
      className={cn(
        'chip inline-flex items-center gap-1 rounded-full text-sm font-medium',
        variant === 'filled'
          ? 'bg-brand text-white'
          : 'bg-white text-brand border border-brand',
        disabled && 'opacity-40',
      )}
    >
      {label}
      {removable && (
        <button
          onClick={onRemove}
          disabled={disabled}
          className={cn(
            'inline-flex items-center justify-center rounded-full w-4 h-4 ml-0.5',
            'cursor-pointer transition-opacity hover:opacity-70',
            variant === 'filled' ? 'text-white' : 'text-brand',
            disabled && 'cursor-not-allowed',
          )}
        >
          <X size={10} />
        </button>
      )}
    </span>
  )
}

export default Chip
