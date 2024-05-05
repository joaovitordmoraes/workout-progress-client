'use client'

import { Modal } from 'antd'
import { NewExerciseForm } from './NewExerciseForm'
import { useTraining } from '@/app/store/training'

export function NewExerciseModal() {
  const { modalOpen, setModalOpen } = useTraining((store) => {
    return {
      modalOpen: store.modalOpen,
      setModalOpen: store.setModalOpen,
    }
  })

  const handleOk = () => {
    setModalOpen(false)
  }

  const handleCancel = () => {
    setModalOpen(false)
  }

  return (
    <Modal
      title="Criar novo exercício"
      open={modalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <NewExerciseForm />
    </Modal>
  )
}
