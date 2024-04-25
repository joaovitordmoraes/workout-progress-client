'use client'

import { Modal } from 'antd'
import { NewRoutineSection } from './NewRoutineSection'
import { useRoutines } from '@/app/store'

export function NewRoutineModal() {
  const { updateRoutines, setUpdateRoutines } = useRoutines((store) => {
    return {
      updateRoutines: store.updateRoutines,
      setUpdateRoutines: store.setUpdateRoutines,
    }
  })

  const handleOk = () => {
    setUpdateRoutines(false)
  }

  const handleCancel = () => {
    setUpdateRoutines(false)
  }

  return (
    <Modal
      title="Criar nova rotina de treino"
      open={updateRoutines}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <NewRoutineSection />
    </Modal>
  )
}
