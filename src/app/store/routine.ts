import { create } from 'zustand'

export interface RoutinesState {
  updateRoutines: boolean
  setUpdateRoutines: (update: boolean) => void
  routineId: string
  setRoutineId: (id: string) => void
  updateTrainings: boolean
  setUpdateTrainings: (update: boolean) => void
}

export const useRoutines = create<RoutinesState>((set) => {
  return {
    updateRoutines: false,
    routineId: '',
    updateTrainings: false,
    setUpdateRoutines: (update) => {
      set({ updateRoutines: update })
    },
    setRoutineId: (id) => {
      set({ routineId: id })
    },
    setUpdateTrainings: (update) => {
      set({ updateTrainings: update })
    },
  }
})
