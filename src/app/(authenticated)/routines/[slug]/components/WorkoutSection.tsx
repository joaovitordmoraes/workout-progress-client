'use client'

import { WorkoutCard } from '@/app/components/WorkoutCard'
import { getTrainingExercises } from '@/app/services/training/client'
import { Exercise, GetTrainingExercises } from '@/app/services/training/types'
import { useEffect, useState } from 'react'

type WorkoutSectionProps = {
  name: string
  trainingId: string
}

export default function WorkoutSection({
  name,
  trainingId,
}: WorkoutSectionProps) {
  const [trainingExercises, setTrainingExercises] = useState<Exercise[]>(
    [] as Exercise[],
  )

  useEffect(() => {
    const loadExercises = async () => {
      const response: GetTrainingExercises =
        await getTrainingExercises(trainingId)
      setTrainingExercises(response.exercises)
    }

    loadExercises()
  }, [trainingId])

  return (
    <>
      <WorkoutCard
        key={name}
        name={name}
        exercises={trainingExercises}
        onClick={() => console.log('click')}
      />
    </>
  )
}
