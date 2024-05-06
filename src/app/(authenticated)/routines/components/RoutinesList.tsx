'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  deleteRoutine,
  getAllTrainingRoutines,
} from '@/app/services/training-routine/client'
import { useRoutines } from '@/app/store/routine'

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
  const { updateRoutines, setUpdateRoutines } = useRoutines((store) => {
    return {
      updateRoutines: store.updateRoutines,
      setUpdateRoutines: store.setUpdateRoutines,
    }
  })
  const [routines, setRoutines] = useState<RoutineProps[]>()
  const [refreshRoutines, setRefreshRoutines] = useState(false)
  const router = useRouter()

  const showModal = () => {
    setUpdateRoutines(true)
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
  }, [updateRoutines, refreshRoutines])

  const routineDelete = async (id: string) => {
    try {
      const deletion = await deleteRoutine(id)

      if (deletion.success) {
        setRefreshRoutines(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <NewRoutineModal />
      {routines && routines.length > 0 ? (
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {routines?.map((item) => (
            <RoutineItem
              key={item.name}
              name={item.name}
              trainings={item.trainings.length}
              onClick={() => router.replace(`/routines/${item.id}`)}
              onRemove={() => routineDelete(item.id)}
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
