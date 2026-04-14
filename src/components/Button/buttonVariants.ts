import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-medium transition-colors cursor-pointer border rounded',
  {
    variants: {
      variant: {
        primary:        'bg-brand text-white border-transparent hover:bg-brand-hover',
        primary_line:   'bg-white text-brand border-brand hover:bg-brand-light-hover',
        secondary_fill: 'bg-brand-light text-brand border-transparent hover:bg-brand-light-hover',
        secondary_line: 'bg-white text-text-gray border-border-gray hover:bg-gray-hover',
        excel:          'bg-white text-text-gray border-[#ccc] hover:border-excel hover:bg-excel-light',
        ghost:          'bg-ghost border-transparent text-text-gray hover:bg-ghost-hover rounded-full',
      },
      size: {
        sm: 'btn-sm',
        md: 'btn-md',
        lg: 'btn-lg',
      },
      disabled: {
        true:  'cursor-not-allowed',
        false: 'cursor-pointer',
      },
    },
    compoundVariants: [
      { variant: 'primary',        disabled: true, class: 'bg-[#ccc] text-white border-transparent hover:bg-[#ccc]' },
      { variant: 'secondary_fill', disabled: true, class: 'bg-[#ccc] text-white border-transparent hover:bg-[#ccc]' },
      { variant: 'primary_line',   disabled: true, class: 'bg-white text-[#ccc] border-[#ccc] hover:bg-white' },
      { variant: 'secondary_line', disabled: true, class: 'bg-white text-[#ccc] border-[#ccc] hover:bg-white' },
      { variant: 'excel',          disabled: true, class: 'bg-white text-[#ccc] border-[#ccc] hover:bg-white hover:border-[#ccc]' },
      { variant: 'ghost',          disabled: true, class: 'bg-ghost text-[#ccc] hover:bg-ghost' },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      disabled: false,
    },
  }
)
