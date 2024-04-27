'use client'

import { Modal } from 'antd'
import { useRoutines } from '@/app/store'
import { NewTrainingForm } from './NewTrainingForm'

export function NewTrainingModal() {
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
      title="Criar novo treino"
      open={updateRoutines}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <NewTrainingForm />
    </Modal>
  )
}
