import { StoryObj, Meta } from '@storybook/react'
import { WorkoutItem } from '.'

export default {
  title: 'WorkoutItem',
  component: WorkoutItem,
  tags: ['autodocs'],
} as Meta<typeof WorkoutItem>

export const Default: StoryObj<typeof WorkoutItem> = {
  args: {
    name: 'Rosca Martelo',
    description: 'Drop na última série',
    series: 4,
    series_type: 'Normal',
    reps: 15,
    weight: 40,
    onRemove: () => console.log('remove'),
  },
}
