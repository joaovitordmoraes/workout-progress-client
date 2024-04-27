import {
  Routines,
  TrainingExercises,
} from '@/app/services/training-routine/types'
import { redirect } from 'next/navigation'
import { EmptyStateSection } from './components/EmptyStateSection'
import { TrainingHeader } from './components/TrainingHeader'
import { getAllTrainingRoutinesServer } from '@/app/services/training-routine/server'
import { TrainingsSection } from './components/TrainingsSection'

type RoutinePageProps = {
  params: {
    slug: string
  }
}

export default async function RoutinePage({ params }: RoutinePageProps) {
  const trainings: TrainingExercises = await getAllTrainingRoutinesServer()

  const routine = trainings.routines.find(
    (item: Routines) => item.id === params.slug,
  )

  if (!routine) {
    redirect('/routines')
  }

  return (
    <div className="w-full h-screen flex flex-col p-6">
      <h1 className="text-5xl uppercase font-bold">{routine.name}</h1>

      <div className="h-px w-full bg-zinc-200 my-8"></div>

      <TrainingHeader routineId={params.slug} />

      {routine.trainings.length ? (
        <TrainingsSection routineId={params.slug} />
      ) : (
        <EmptyStateSection routineId={params.slug} />
      )}
    </div>
  )
}
