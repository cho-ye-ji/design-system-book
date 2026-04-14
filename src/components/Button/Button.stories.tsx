import type { Meta, StoryObj } from '@storybook/react'
import { Plus, ChevronRight } from 'lucide-react'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Button/button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'primary_line', 'secondary_fill', 'secondary_line'],
      description: '버튼 스타일 종류',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '버튼 크기',
    },
    label: { control: 'text', description: '버튼 텍스트' },
    disabled: { control: 'boolean', description: '비활성화 여부' },
    leftIcon:  { table: { disable: true } },
    rightIcon: { table: { disable: true } },
    iconOnly:  { table: { disable: true } },
    onClick:   { table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Variants: Story = {
  args: { size: 'md', disabled: false },
  render: (args) => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button {...args} label="Primary"        variant="primary"        />
      <Button {...args} label="Primary Line"   variant="primary_line"   />
      <Button {...args} label="Secondary Fill" variant="secondary_fill" />
      <Button {...args} label="Secondary Line" variant="secondary_line" />
    </div>
  ),
}

export const WithLeftIcon: Story = {
  args: { size: 'md', disabled: false },
  render: (args) => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button {...args} label="추가하기" variant="primary"        leftIcon={Plus} />
      <Button {...args} label="추가하기" variant="primary_line"   leftIcon={Plus} />
      <Button {...args} label="추가하기" variant="secondary_fill" leftIcon={Plus} />
      <Button {...args} label="추가하기" variant="secondary_line" leftIcon={Plus} />
    </div>
  ),
}

export const WithRightIcon: Story = {
  args: { size: 'md', disabled: false },
  render: (args) => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button {...args} label="더보기" variant="primary"        rightIcon={ChevronRight} />
      <Button {...args} label="더보기" variant="primary_line"   rightIcon={ChevronRight} />
      <Button {...args} label="더보기" variant="secondary_fill" rightIcon={ChevronRight} />
      <Button {...args} label="더보기" variant="secondary_line" rightIcon={ChevronRight} />
    </div>
  ),
}
