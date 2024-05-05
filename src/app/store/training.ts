import { create } from 'zustand'

export interface TrainingState {
  trainingId: string
  updateTraining: boolean
  modalOpen: boolean
  setTrainingId: (id: string) => void
  setUpdateTraining: (update: boolean) => void
  setModalOpen: (active: boolean) => void
}

export const useTraining = create<TrainingState>((set) => {
  return {
    trainingId: '',
    updateTraining: false,
    modalOpen: false,
    setTrainingId: (id) => {
      set({ trainingId: id })
    },
    setUpdateTraining: (update) => {
      set({ updateTraining: update })
    },
    setModalOpen: (active) => {
      set({ modalOpen: active })
    },
  }
})
