import { useState } from "react"
import { ChevronDown } from 'lucide-react'
import { cn } from '../../lib/utils'

interface DropdownProps {
    options: string[]
    placeholder?: string
    disabled?: boolean
}

function Dropdown(
    { options, placeholder = '선택하세요.', disabled = false }: DropdownProps) {
    //select box 열고, 닫고
    const [isOpen, setIsOpen] = useState(false)
    //클릭한 옵션이 버튼에 표시되게 useState 추가
    const [selected, setDropdowned] = useState<string | null>(null)

    const handleDropdown = (option: string) => {
        setDropdowned(option)
        setIsOpen(false)
    }

    const handleToggle = () => {
        if (disabled) return
        setIsOpen(!isOpen)
    }

    return (
        <div className="relative w-48">
            <button
                onClick={handleToggle}
                disabled={disabled}
                className={cn(
                    'w-full flex items-center justify-between px-3 h-9 border rounded text-sm transition-colors',
                    isOpen
                        ? 'border-brand text-brand'
                        : 'border-border-gray text-[#333]',
                    disabled && 'bg-[#f5f5f5] text-[#ccc] border-[#ccc] cursor-not-allowed',
                )}
            >
                <span>{selected ?? placeholder}</span>
                <ChevronDown 
                size={14} 
                className={
                    cn('transition-transform', isOpen && 'rotate-180')} />
            </button>
            {/* isOpen 열림/닫힘 상태 저장 함수 
                아래는 isOpen이 true일 떄만 아래 목록이 보이게
            */}
            {isOpen && (
                <ul className="absolute z-10 w-full mt-1 border border-border-gray rounded bg-white shadow-sm">
                    {options.map((option) => (
                        <li
                            key={option}
                            onClick={() => handleDropdown(option)}
                            className={cn(
    'px-2.5 py-1.5 text-sm cursor-pointer hover:bg-gray-hover',
    selected === option && 'text-brand font-medium bg-brand-light-hover',
)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Dropdown