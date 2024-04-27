'use client'

import { EmptyState } from '@/app/components/EmptyState'
import { useRoutines } from '@/app/store'
import { NewTrainingModal } from './NewTrainingModal'
import { useEffect } from 'react'

type EmptyStateSectionProps = {
  routineId: string
}

export function EmptyStateSection({ routineId }: EmptyStateSectionProps) {
  const { setUpdateRoutines, setRoutineId } = useRoutines((store) => {
    return {
      setUpdateRoutines: store.setUpdateRoutines,
      setRoutineId: store.setRoutineId,
    }
  })

  useEffect(() => {
    setRoutineId(routineId)
  }, [routineId])

  const showModal = () => {
    setUpdateRoutines(true)
  }

  return (
    <>
      <NewTrainingModal />
      <EmptyState buttonLabel="Novo Treino" onClick={showModal}>
        Nenhuma treino encontrado. <br />
        Crie seu primeiro treino.
      </EmptyState>
    </>
  )
}
