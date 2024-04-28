'use client'

import { WorkoutItem } from '@/app/components/WorkoutItem'
import { getTrainingExercises } from '@/app/services/training/client'
import { Exercise, GetTrainingExercises } from '@/app/services/training/types'
import { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'

type TrainingDetailProps = {
  params: {
    slug: string
  }
}

export default function TrainingDetail({ params }: TrainingDetailProps) {
  const [trainingExercises, setTrainingExercises] = useState<Exercise[]>(
    [] as Exercise[],
  )

  useEffect(() => {
    const loadExercises = async () => {
      const response: GetTrainingExercises = await getTrainingExercises(
        params.slug,
      )
      setTrainingExercises(response.exercises)
    }

    loadExercises()
  }, [params.slug])

  return (
    <section className="w-full h-screen flex flex-col p-6">
      <header className="flex justify-between border-b border-zinc-200 pb-8 mb-8">
        <h2 className="text-2xl font-bold uppercase">Treino A</h2>

        <button
          className="rounded-md p-2 hover:bg-zinc-50"
          title="Adicionar novo exercício"
          type="button"
        >
          <FiPlus className="w-5 h-5 text-zinc-500" />
        </button>
      </header>
      {trainingExercises.length ? (
        <>
          {trainingExercises.map((exercise) => {
            return (
              <WorkoutItem
                key={exercise.id}
                name={exercise.name}
                description={exercise.description}
                series_type={exercise.series_type}
                series={exercise.series}
                reps={exercise.reps}
                weight={40}
                onRemove={() => console.log('remove')}
              />
            )
          })}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </section>
  )
}
