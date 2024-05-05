'use client'

import { useRoutines } from '@/app/store/routine'
import { FiPlus } from 'react-icons/fi'
import { NewRoutineModal } from './NewRoutineModal'

export function MyRoutineHeader() {
  const { setuUpdateRoutines } = useRoutines((store) => {
    return {
      setuUpdateRoutines: store.setUpdateRoutines,
    }
  })

  const showModal = () => {
    setuUpdateRoutines(true)
  }

  return (
    <>
      <NewRoutineModal />
      <header className="flex justify-between mb-8">
        <h2 className="text-2xl">Minhas rotinas de treino:</h2>
        <button
          className="rounded-md p-2 hover:bg-zinc-50"
          title="Criar nova rotina"
          type="button"
          onClick={showModal}
        >
          <FiPlus className="w-5 h-5 text-zinc-500" />
        </button>
      </header>
    </>
  )
}
