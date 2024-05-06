import { StoryObj, Meta } from '@storybook/react'
import { WorkoutCard } from '.'

export default {
  title: 'WorkoutCard',
  component: WorkoutCard,
  tags: ['autodocs'],
} as Meta<typeof WorkoutCard>

export const Default: StoryObj<typeof WorkoutCard> = {
  args: {},
}
