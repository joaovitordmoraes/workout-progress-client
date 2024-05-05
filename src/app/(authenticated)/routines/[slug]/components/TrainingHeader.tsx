'use client'

import { useRoutines } from '@/app/store/routine'
import { FiPlus } from 'react-icons/fi'
import { NewTrainingModal } from './NewTrainingModal'
import { useEffect } from 'react'

type TrainingHeaderProps = {
  routineId: string
}

export function TrainingHeader({ routineId }: TrainingHeaderProps) {
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
      <header className="flex justify-between mb-8">
        <h2 className="text-2xl uppercase">Treinos:</h2>
        <button
          className="rounded-md p-2 hover:bg-zinc-50"
          title="Criar novo treino"
          type="button"
          onClick={showModal}
        >
          <FiPlus className="w-5 h-5 text-zinc-500" />
        </button>
      </header>
    </>
  )
}
