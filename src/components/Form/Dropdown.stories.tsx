import type { Meta, StoryObj } from '@storybook/react'
import Dropdown from './Dropdown'

const meta: Meta<typeof Dropdown> = {
  title: 'Form/dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean', description: '비활성화 여부' },
    placeholder: { control: 'text', description: '기본 텍스트' },
    options: { table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof Dropdown>

const defaultOptions = [
  '옵션 1', '옵션 2', '옵션 3', '옵션 4', '옵션 5'
]

export const Default: Story = {
  args: {
    options: defaultOptions,
    placeholder: '선택하세요',
    disabled: false,
  },
  render: (args) => (
    <div className="flex gap-4 items-start">
      <Dropdown {...args} />
      <Dropdown {...args} disabled />
    </div>
  ),
}
