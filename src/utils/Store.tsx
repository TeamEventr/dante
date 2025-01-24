import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
    username: string;
    email: string;
    firstName: string;
    middleName: string;
    lastName: string;
    profilePictureURL: string;
}

interface AuthState {
    user: User | null;    
    isAuthenticated: boolean;
    isHost: boolean;
    clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            isHost: false,
            clearAuth: () => set({ isAuthenticated: false, isHost: false, user: null }),
        }),
        { name: "auth-store" }
    )
);