import { StoryObj, Meta } from '@storybook/react'
import { Logo } from '.'

export default {
  title: 'Logo',
  component: Logo,
  tags: ['autodocs'],
} as Meta<typeof Logo>

export const Default: StoryObj<typeof Logo> = {
  args: {},
}
