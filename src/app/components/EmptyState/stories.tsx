import { StoryObj, Meta } from '@storybook/react'
import { EmptyState } from '.'

export default {
  title: 'EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
} as Meta<typeof EmptyState>

export const Default: StoryObj<typeof EmptyState> = {
  args: {
    children: (
      <>
        Nenhuma rotina de treino encontrada.
        <br /> Crie sua primeira rotina.
      </>
    ),
    buttonLabel: 'Nova Rotina',
    onClick: () => console.log('ok'),
  },
}
