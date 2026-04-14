import type { Meta, StoryObj } from '@storybook/react'
import { Plus, Trash2, Pencil, Search } from 'lucide-react'
import CloseIcon from '../icons/CloseIcon'
import ExcelIcon from '../icons/ExcelIcon'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Button/butcon',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'primary_line', 'secondary_fill', 'secondary_line', 'excel', 'ghost'],
      description: '버튼 스타일 종류',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '버튼 크기',
    },
    disabled: { control: 'boolean', description: '비활성화 여부' },
    leftIcon:  { table: { disable: true } },
    rightIcon: { table: { disable: true } },
    iconOnly:  { table: { disable: true } },
    onClick:   { table: { disable: true } },
    label:     { table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Variants: Story = {
  args: { size: 'md', disabled: false },
  render: (args) => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button {...args} variant="primary"        leftIcon={Plus}   iconOnly />
      <Button {...args} variant="primary_line"   leftIcon={Plus}   iconOnly />
      <Button {...args} variant="secondary_fill" leftIcon={Plus}   iconOnly />
      <Button {...args} variant="secondary_line" leftIcon={Plus}   iconOnly />
      <Button {...args} variant="excel"          leftIcon={ExcelIcon} iconOnly />
      <Button {...args} variant="ghost"          leftIcon={CloseIcon}       iconOnly />
    </div>
  ),
}

export const Icons: Story = {
  args: { size: 'md', disabled: false },
  render: (args) => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button {...args} variant="primary"      leftIcon={Plus}   iconOnly />
      <Button {...args} variant="primary_line" leftIcon={Trash2} iconOnly />
      <Button {...args} variant="primary_line" leftIcon={Pencil} iconOnly />
      <Button {...args} variant="primary_line" leftIcon={Search} iconOnly />
    </div>
  ),
}

export const Circle: Story = {
  args: { size: 'md', disabled: false },
  render: (args) => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button {...args} variant="ghost" leftIcon={CloseIcon} iconOnly />
      <Button {...args} variant="ghost" size="sm" leftIcon={CloseIcon} iconOnly />
      <Button {...args} variant="ghost" size="lg" leftIcon={CloseIcon} iconOnly />
    </div>
  ),
}

export const Excel: Story = {
  args: { size: 'md', disabled: false },
  render: (args) => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button {...args} variant="excel" leftIcon={ExcelIcon} iconOnly />
      <Button {...args} variant="excel" leftIcon={ExcelIcon} label="엑셀" />
    </div>
  ),
}
