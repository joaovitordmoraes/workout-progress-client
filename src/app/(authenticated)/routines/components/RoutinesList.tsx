'use client'

import { RoutineItem } from '@/app/components/RoutineItem'
import { getAllTrainingRoutines } from '@/app/services/training-routine/client'
import { useRoutines } from '@/app/store'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

type trainingProps = {
  id: string
  name: string
  training_routines_id: string
}

type RoutineProps = {
  id: string
  name: string
  user_id: string
  trainings: trainingProps[]
}

export function RoutinesList() {
  const { updateRoutines } = useRoutines((store) => {
    return {
      updateRoutines: store.updateRoutines,
    }
  })
  const [routines, setRoutines] = useState<RoutineProps[]>()
  const router = useRouter()

  useEffect(() => {
    const loadRoutines = async () => {
      const response = await getAllTrainingRoutines()
      setRoutines(response.routines)
    }

    loadRoutines()

    if (updateRoutines) {
      loadRoutines()
    }
  }, [updateRoutines])

  return (
    <>
      {routines && routines.length > 0 ? (
        <>
          {routines?.map((item) => (
            <RoutineItem
              key={item.name}
              name={item.name}
              trainings={item.trainings.length}
              onClick={() => router.replace(`/routines/${item.id}`)}
            />
          ))}
        </>
      ) : (
        <p>Nenhuma Rotina de treino encontrada</p>
      )}
    </>
  )
}
