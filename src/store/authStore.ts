import { create } from "zustand"

type AuthStore = {
  isAuthenticated: boolean
  isHost: boolean
  
  setIsAuthenticated: (isAuthenticated: boolean) => void
  setIsHost: (isHost: boolean) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  isAuthenticated: false,
  isHost: false,
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  setIsHost: (isHost) => set({ isHost }),
}))

