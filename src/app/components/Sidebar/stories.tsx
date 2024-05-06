import { StoryObj, Meta } from '@storybook/react'
import { Sidebar } from '.'

export default {
  title: 'Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
} as Meta<typeof Sidebar>

export const Default: StoryObj<typeof Sidebar> = {
  args: {},
}
