import { StoryObj, Meta } from '@storybook/react'
import { RoutineItem } from '.'

export default {
  title: 'RoutineItem',
  component: RoutineItem,
  tags: ['autodocs'],
} as Meta<typeof RoutineItem>

export const Default: StoryObj<typeof RoutineItem> = {
  args: {
    name: 'Hipertrofia',
    trainings: 4,
  },
}
