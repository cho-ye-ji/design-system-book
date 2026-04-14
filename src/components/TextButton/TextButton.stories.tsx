import type { Meta, StoryObj } from '@storybook/react'
import { Plus, ChevronRight, Download } from 'lucide-react'
import TextButton from './TextButton'

const meta: Meta<typeof TextButton> = {
  title: 'Button/text button',
  component: TextButton,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['brand', 'gray'],
      description: '텍스트 색상',
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
    onClick:   { table: { disable: true } },
  },
}

export default meta
type Story = StoryObj<typeof TextButton>

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6 items-center">
      <TextButton label="Brand 색상"  color="brand" size="md" />
      <TextButton label="Gray 색상"   color="gray"  size="md" />
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-6 items-center">
        <TextButton label="좌측 아이콘" color="brand" size="md" leftIcon={Plus} />
        <TextButton label="우측 아이콘" color="brand" size="md" rightIcon={ChevronRight} />
        <TextButton label="다운로드"    color="gray"  size="md" leftIcon={Download} />
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6 items-center">
      <TextButton label="Small"  color="brand" size="sm" rightIcon={ChevronRight} />
      <TextButton label="Medium" color="brand" size="md" rightIcon={ChevronRight} />
      <TextButton label="Large"  color="brand" size="lg" rightIcon={ChevronRight} />
    </div>
  ),
}
