'use client'

import {
  Routines,
  TrainingExercises,
} from '@/app/services/training-routine/types'
import { useEffect, useState } from 'react'
import { getAllTrainingRoutines } from '@/app/services/training-routine/client'
import { useRoutines } from '@/app/store/routine'
import { redirect, useRouter } from 'next/navigation'
import { TrainingCard } from '@/app/components/TrainingCard'

type TrainingsSectionProps = {
  routineId: string
}

export function TrainingsSection({ routineId }: TrainingsSectionProps) {
  const [trainingRoutine, setTrainingRoutine] = useState<Routines>(
    {} as Routines,
  )
  const [haveTrainings, setHaveTrainings] = useState(false)

  const { updateTrainings } = useRoutines((store) => {
    return {
      updateTrainings: store.updateTrainings,
    }
  })

  const router = useRouter()

  useEffect(() => {
    const loadingRoutines = async () => {
      const trainings: TrainingExercises = await getAllTrainingRoutines()

      const routine = trainings.routines.find(
        (item: Routines) => item.id === routineId,
      )

      if (!routine) {
        redirect('/routines')
      }

      setTrainingRoutine(routine)
      setHaveTrainings(!!routine?.trainings.length)
    }

    loadingRoutines()
  }, [updateTrainings])

  return (
    <div className="grid grid-cols-3 gap-6">
      {haveTrainings &&
        trainingRoutine.trainings.map((training) => {
          return (
            <TrainingCard
              key={training.name}
              name={training.name}
              onClick={() => router.push(`/training/${training.id}`)}
              onRemove={() => console.log('remove')}
            />
          )
        })}
    </div>
  )
}
