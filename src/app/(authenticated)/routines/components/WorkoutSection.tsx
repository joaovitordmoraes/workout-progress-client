'use client'

import { ExercisesProps, WorkoutCard } from '@/app/components/WorkoutCard'

type WorkoutSectionProps = {
  name: string
  exercises: ExercisesProps[]
}

export default function WorkoutSection({
  name,
  exercises,
}: WorkoutSectionProps) {
  return (
    <>
      <WorkoutCard
        key={name}
        name={name}
        exercises={exercises}
        onClick={() => console.log('click')}
      />
    </>
  )
}
