import { create } from 'zustand'

export interface RoutinesState {
  updateRoutines: boolean
  setUpdateRoutines: (update: boolean) => void
}

export const useRoutines = create<RoutinesState>((set) => {
  return {
    updateRoutines: false,
    setUpdateRoutines: (update) => {
      set({ updateRoutines: update })
    },
  }
})
