import { create } from 'zustand'

export interface SidebarState {
  isOpen: boolean
  setIsOpen: (active: boolean) => void
}

export const useSidebar = create<SidebarState>((set) => {
  return {
    isOpen: false,
    setIsOpen: (active) => {
      set({ isOpen: active })
    },
  }
})
