import { StoryObj, Meta } from '@storybook/react'
import { TrainingCard } from '.'

export default {
  title: 'TrainingCard',
  component: TrainingCard,
  tags: ['autodocs'],
} as Meta<typeof TrainingCard>

export const Default: StoryObj<typeof TrainingCard> = {
  args: {
    name: 'Treino A',
  },
}
