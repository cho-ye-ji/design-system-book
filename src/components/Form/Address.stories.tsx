import type { Meta, StoryObj } from '@storybook/react'
import Address from './Address'

const meta: Meta<typeof Address> = {
  title: 'Form/Address',
  component: Address,
  tags: ['autodocs'],
}
export default meta

export const Default: StoryObj = {
  name: 'Address',
  render: () => (
    <div className="w-[440px] p-6 border border-dashed border-[#ccc] rounded-lg flex flex-col gap-6">

      <div className="flex flex-col gap-2">
        <p className="text-[11px] font-medium text-[#bbb] tracking-wide">Empty</p>
        <Address />
      </div>

      <div className="h-px bg-[#f0f0f0]" />

      <div className="flex flex-col gap-2">
        <p className="text-[11px] font-medium text-[#bbb] tracking-wide">Filled</p>
        <Address value={{ zipcode: '01234', address: '서울시 강남구 광평로 281' }} />
      </div>

      <div className="h-px bg-[#f0f0f0]" />

      <div className="flex flex-col gap-2">
        <p className="text-[11px] font-medium text-[#bbb] tracking-wide">Filled with Detail</p>
        <Address value={{ zipcode: '01234', address: '서울시 강남구 광평로 281', detail: '5층 호성에프엠에스' }} />
      </div>

      <div className="h-px bg-[#f0f0f0]" />

      <div className="flex flex-col gap-2">
        <p className="text-[11px] font-medium text-[#bbb] tracking-wide">Disabled</p>
        <Address disabled value={{ zipcode: '01234', address: '서울시 강남구 광평로 281' }} />
      </div>

    </div>
  ),
}
