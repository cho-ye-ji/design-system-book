import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import SelectList from './SelectList'

const meta: Meta<typeof SelectList> = {
  title: 'Form/SelectList',
  component: SelectList,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['single', 'multi'],
      description: '단일 선택 / 다중 선택',
    },
    options: { table: { disable: true } },
    selected: { table: { disable: true } },
    onChange: { table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof SelectList>

const OPTIONS = ['사과', '바나나', '딸기', '포도', '수박']

export const Single: Story = {
  name: 'Single (단일 선택)',
  render: () => {
    const [selected, setSelected] = useState<string[]>(['바나나'])
    return <SelectList options={OPTIONS} selected={selected} onChange={setSelected} variant="single" />
  },
}

export const Multi: Story = {
  name: 'Multi (다중 선택)',
  render: () => {
    const [selected, setSelected] = useState<string[]>(['사과', '딸기'])
    return <SelectList options={OPTIONS} selected={selected} onChange={setSelected} variant="multi" />
  },
}

export const Both: Story = {
  name: 'Both (나란히 비교)',
  render: () => {
    const [single, setSingle] = useState<string[]>(['바나나'])
    const [multi, setMulti] = useState<string[]>(['사과', '딸기'])
    return (
      <div className="flex gap-6 items-start">
        <div>
          <p className="text-xs text-text-gray mb-2">Single</p>
          <SelectList options={OPTIONS} selected={single} onChange={setSingle} variant="single" />
        </div>
        <div>
          <p className="text-xs text-text-gray mb-2">Multi</p>
          <SelectList options={OPTIONS} selected={multi} onChange={setMulti} variant="multi" />
        </div>
      </div>
    )
  },
}
