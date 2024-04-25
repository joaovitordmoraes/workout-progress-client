import { create } from 'zustand'

export interface PaymentMethodState {
  updateRoutines: boolean
  setUpdateRoutines: () => void
}

export const useRoutines = create<PaymentMethodState>((set) => {
  return {
    updateRoutines: false,
    setUpdateRoutines: () => {
      set({ updateRoutines: true })
    },
  }
})
