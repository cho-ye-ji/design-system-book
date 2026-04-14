import type { Meta, StoryObj } from '@storybook/react'
import Chip from './Chip'

const meta: Meta<typeof Chip> = {
  title: 'Button/chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
      description: '칩 스타일',
    },
    label: { control: 'text', description: '칩 텍스트' },
    removable: { control: 'boolean', description: 'X 버튼 표시 여부' },
    disabled: { control: 'boolean', description: '비활성화 여부' },
    onRemove:  { table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof Chip>

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <Chip label="Filled"   variant="filled"   />
      <Chip label="Outlined" variant="outlined" />
    </div>
  ),
}

export const Removable: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <Chip label="Filled"   variant="filled"   removable />
      <Chip label="Outlined" variant="outlined" removable />
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <Chip label="Filled"   variant="filled"   removable disabled />
      <Chip label="Outlined" variant="outlined" removable disabled />
    </div>
  ),
}
