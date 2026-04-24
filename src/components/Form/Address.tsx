import { useState } from 'react'
import { Search } from 'lucide-react'
import { cn } from '../../lib/utils'

interface AddressValue {
    zipcode: string
    address: string
    detail: string
}

interface AddressProps {
    value?: Partial<AddressValue>
    disabled?: boolean
    onChange?: (value: AddressValue) => void
}

function Address({ value = {}, disabled = false, onChange }: AddressProps) {
    const [zipcode, setZipcode] = useState(value.zipcode ?? '')
    const [address, setAddress] = useState(value.address ?? '')
    const [detail, setDetail] = useState(value.detail ?? '')

    const handleChange = (field: keyof AddressValue, val: string) => {
        const next = { zipcode, address, detail, [field]: val }
        if (field === 'zipcode') setZipcode(val)
        if (field === 'address') setAddress(val)
        if (field === 'detail') setDetail(val)
        onChange?.(next)
    }

    const inputBase = cn(
        'h-9 px-3 text-sm border border-border-gray rounded outline-none transition-colors',
        'placeholder:text-[#ccc] text-[#333]',
        disabled
            ? 'bg-[#f5f5f5] text-[#ccc] border-[#ddd] cursor-not-allowed'
            : 'bg-white focus:border-brand',
    )

    return (
        <div className="flex flex-col gap-2 w-full">
            {/* 우편번호 + 주소 */}
            <div className="flex gap-2">
                <div className="relative flex-none w-36">
                    <input
                        type="text"
                        placeholder="우편번호"
                        value={zipcode}
                        disabled={disabled}
                        onChange={(e) => handleChange('zipcode', e.target.value)}
                        className={cn(inputBase, 'w-full pr-8')}
                    />
                    <button
                        disabled={disabled}
                        className={cn(
                            'absolute right-2 top-1/2 -translate-y-1/2',
                            disabled ? 'text-[#ccc] cursor-not-allowed' : 'text-text-gray hover:text-brand cursor-pointer',
                        )}
                    >
                        <Search size={14} />
                    </button>
                </div>
                <input
                    type="text"
                    placeholder="주소"
                    value={address}
                    disabled={disabled}
                    onChange={(e) => handleChange('address', e.target.value)}
                    className={cn(inputBase, 'flex-1')}
                />
            </div>
            {/* 상세 주소 */}
            <input
                type="text"
                placeholder="상세 주소"
                value={detail}
                disabled={disabled}
                onChange={(e) => handleChange('detail', e.target.value)}
                className={cn(inputBase, 'w-full')}
            />
        </div>
    )
}

export default Address
