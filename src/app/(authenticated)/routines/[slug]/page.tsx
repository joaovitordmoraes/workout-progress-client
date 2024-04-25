import WorkoutSection from '../components/WorkoutSection'
import {
  getAllTrainingRoutinesServer,
  getTrainingExercises,
} from '@/app/services/training-routine/server'
import {
  Routines,
  TrainingExercises,
} from '@/app/services/training-routine/types'
import { redirect } from 'next/navigation'

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

      <h2 className="text-2xl uppercase font-bold mb-8">Treinos:</h2>

      <div className="grid grid-cols-3 gap-6">
        {routine?.trainings.map(async (training) => {
          const trainingResponse = await getTrainingExercises(training.id)

          return (
            <WorkoutSection
              key={training.name}
              name={training.name}
              exercises={trainingResponse.exercises}
            />
          )
        })}
      </div>
    </div>
  )
}
