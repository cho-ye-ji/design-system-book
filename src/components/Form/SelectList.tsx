import { Check, X } from 'lucide-react'
import { cn } from '../../lib/utils'

interface SelectListProps {
    options: string[]
    selected: string[]
    onChange: (selected: string[]) => void
    variant?: 'single' | 'multi'
}

function SelectList({ options, selected, onChange, variant = 'multi' }: SelectListProps) {
    const handleToggle = (option: string) => {
        if (variant === 'single') {
            onChange([option])
            return
        }
        if (selected.includes(option)) {
            onChange(selected.filter((item) => item !== option))
        } else {
            onChange([...selected, option])
        }
    }

    const handleSelectAll = () => onChange([...options])
    const handleDeselectAll = () => onChange([])

    return (
        <div className="border border-border-gray rounded bg-white w-48 overflow-hidden">
            {variant === 'multi' && (
                <div className="flex items-center justify-between px-3 py-2 border-b border-border-gray bg-white">
                    <button
                        onClick={handleSelectAll}
                        className="inline-flex items-center gap-1 text-xs text-text-gray hover:text-brand cursor-pointer"
                    >
                        <Check size={11} strokeWidth={2.5} className="shrink-0" />
                        전체선택
                    </button>
                    <button
                        onClick={handleDeselectAll}
                        className="inline-flex items-center gap-1 text-xs text-text-gray hover:text-brand cursor-pointer"
                    >
                        <X size={11} strokeWidth={2.5} className="shrink-0" />
                        선택해제
                    </button>
                </div>
            )}
            <ul className="max-h-[180px] overflow-y-auto">
                {options.map((option) => {
                    const isSelected = selected.includes(option)
                    return (
                        <li
                            key={option}
                            onClick={() => handleToggle(option)}
                            className={cn(
                                'flex items-center gap-2 px-3 py-1.5 text-sm cursor-pointer hover:bg-gray-hover',
                                isSelected && 'text-brand bg-brand-light-hover',
                            )}
                        >
                            {variant === 'multi' && (
                                <input
                                    type="checkbox"
                                    readOnly
                                    checked={isSelected}
                                    className="accent-brand cursor-pointer"
                                />
                            )}
                            {option}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SelectList
