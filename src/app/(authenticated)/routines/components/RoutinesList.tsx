'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getAllTrainingRoutines } from '@/app/services/training-routine/client'
import { useRoutines } from '@/app/store'

import { EmptyState } from '@/app/components/EmptyState'
import { RoutineItem } from '@/app/components/RoutineItem'
import { NewRoutineModal } from './NewRoutineModal'

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
  const { updateRoutines, setuUpdateRoutines } = useRoutines((store) => {
    return {
      updateRoutines: store.updateRoutines,
      setuUpdateRoutines: store.setUpdateRoutines,
    }
  })
  const [routines, setRoutines] = useState<RoutineProps[]>()
  const router = useRouter()

  const showModal = () => {
    setuUpdateRoutines(true)
  }

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
      <NewRoutineModal />
      {routines && routines.length > 0 ? (
        <section className="grid grid-cols-3 gap-6">
          {routines?.map((item) => (
            <RoutineItem
              key={item.name}
              name={item.name}
              trainings={item.trainings.length}
              onClick={() => router.replace(`/routines/${item.id}`)}
            />
          ))}
        </section>
      ) : (
        <section className="py-4">
          <EmptyState buttonLabel="Nova Rotina" onClick={showModal}>
            Nenhuma rotina de treino encontrada. <br />
            Crie sua primeira rotina.
          </EmptyState>
        </section>
      )}
    </>
  )
}
