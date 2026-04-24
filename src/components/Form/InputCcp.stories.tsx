import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { RotateCcw, ChevronDown, ArrowRight } from 'lucide-react'
import { cn } from '../../lib/utils'

const input = [
  'h-9 px-3 text-sm border border-border-gray rounded outline-none',
  'placeholder:text-[#ccc] text-[#333] bg-white focus:border-brand transition-colors',
].join(' ')

const btn = [
  'h-9 px-4 text-sm border border-border-gray rounded bg-white',
  'hover:bg-gray-hover cursor-pointer text-[#333] whitespace-nowrap transition-colors',
].join(' ')

const sep = 'text-sm text-border-gray select-none'

function InlineSelect({ options, defaultValue }: { options: string[]; defaultValue?: string }) {
  const [value, setValue] = useState(defaultValue ?? options[0])
  return (
    <div className="relative min-w-[88px]">
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={cn(input, 'w-full appearance-none pr-7 cursor-pointer')}
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
      <ChevronDown
        size={12}
        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-gray pointer-events-none"
      />
    </div>
  )
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[11px] font-medium text-[#bbb] tracking-wide">{label}</p>
      {children}
    </div>
  )
}

const meta: Meta = {
  title: 'Form/InputCcp',
  tags: ['autodocs'],
}
export default meta

export const Default: StoryObj = {
  name: 'input_ccp',
  render: () => {
    const [resetValue, setResetValue] = useState('')
    const [checked, setChecked] = useState(false)

    return (
      <div className="w-[440px] p-6 border border-dashed border-[#ccc] rounded-lg flex flex-col gap-5">

        <Row label="01. Text + Button">
          <div className="flex gap-2">
            <input className={cn(input, 'flex-1')} placeholder="'-'없이, 최대12자리" maxLength={12} />
            <button className={btn}>button</button>
          </div>
        </Row>

        <div className="h-px bg-[#f0f0f0]" />

        <Row label="02. Dropdown + Text + Button">
          <div className="flex gap-2">
            <InlineSelect options={['직접입력', '선택1', '선택2']} />
            <input className={cn(input, 'flex-1')} placeholder="placeholder" />
            <button className={btn}>button</button>
          </div>
        </Row>

        <div className="h-px bg-[#f0f0f0]" />

        <Row label="03. Email (아이디 @ 도메인 + 드롭다운)">
          <div className="flex items-center gap-2">
            <input className={cn(input, 'flex-1 min-w-0')} placeholder="이메일 계정 입력" />
            <span className={sep}>@</span>
            <input className={cn(input, 'flex-1 min-w-0')} placeholder="도메인주소" />
            <InlineSelect options={['직접입력', 'gmail.com', 'naver.com']} />
          </div>
        </Row>

        <div className="h-px bg-[#f0f0f0]" />

        <Row label="04. Text + 초기화">
          <div className="relative">
            <input
              className={cn(input, 'w-full pr-16')}
              placeholder="상세주소"
              value={resetValue}
              onChange={(e) => setResetValue(e.target.value)}
            />
            <button
              onClick={() => setResetValue('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-xs text-text-gray hover:text-brand cursor-pointer transition-colors"
            >
              <RotateCcw size={11} />
              초기화
            </button>
          </div>
        </Row>

        <div className="h-px bg-[#f0f0f0]" />

        <Row label="05. Date MM / YY">
          <div className="flex items-center gap-2">
            <input className={cn(input, 'w-20 text-center')} placeholder="MM" maxLength={2} />
            <span className={sep}>/</span>
            <input className={cn(input, 'w-20 text-center')} placeholder="YY" maxLength={2} />
          </div>
        </Row>

        <div className="h-px bg-[#f0f0f0]" />

        <Row label="06. Masked Input (앞번호 - 마스킹)">
          <div className="flex items-center gap-2">
            <input className={cn(input, 'w-32')} placeholder="최대6자리" maxLength={6} />
            <span className={sep}>-</span>
            <div className="h-9 px-3 flex items-center gap-1 border border-border-gray rounded bg-[#f5f5f5]">
              {Array.from({ length: 7 }).map((_, i) => (
                <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#bbb] inline-block" />
              ))}
            </div>
          </div>
        </Row>

        <div className="h-px bg-[#f0f0f0]" />

        <Row label="07. Masked Input (앞번호 - 한자리 - 마스킹)">
          <div className="flex items-center gap-2">
            <input className={cn(input, 'w-28')} placeholder="최대6자리" maxLength={6} />
            <span className={sep}>-</span>
            <input className={cn(input, 'w-10 text-center px-0')} maxLength={1} />
            <span className={sep}>-</span>
            <div className="h-9 px-3 flex items-center gap-1 border border-border-gray rounded bg-[#f5f5f5]">
              {Array.from({ length: 7 }).map((_, i) => (
                <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#bbb] inline-block" />
              ))}
            </div>
          </div>
        </Row>

        <div className="h-px bg-[#f0f0f0]" />

        <Row label="08. Checkbox + Text + Button">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="accent-brand w-4 h-4 cursor-pointer flex-none"
            />
            <input className={cn(input, 'flex-1')} placeholder="placeholder" />
            <button className={btn}>button</button>
          </div>
        </Row>

        <div className="h-px bg-[#f0f0f0]" />

        <Row label="09. Dropdown → Dropdown (범위)">
          <div className="flex items-center gap-2">
            <InlineSelect options={['text', '옵션1', '옵션2']} />
            <ArrowRight size={13} className="text-border-gray flex-none" />
            <InlineSelect options={['text', '옵션1', '옵션2']} />
          </div>
        </Row>

        <div className="h-px bg-[#f0f0f0]" />

        <Row label="10. Text + Dropdown + Text">
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#333] whitespace-nowrap">Text</span>
            <InlineSelect options={['선택', '옵션1', '옵션2']} />
            <span className="text-sm text-[#333] whitespace-nowrap">Text</span>
          </div>
        </Row>

        <div className="h-px bg-[#f0f0f0]" />

        <Row label="11. Text + Dropdown ~ Dropdown">
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#333] whitespace-nowrap">Text</span>
            <InlineSelect options={['선택', '옵션1', '옵션2']} />
            <span className={sep}>~</span>
            <InlineSelect options={['선택', '옵션1', '옵션2']} />
          </div>
        </Row>

        <div className="h-px bg-[#f0f0f0]" />

        <Row label="12. Text + Button (우측 정렬)">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#333]">Text</span>
            <button className={btn}>button</button>
          </div>
        </Row>

      </div>
    )
  },
}
