import { auth } from "@/api/auth";
import { AuthTypes } from "@/lib/types";
import { createWithEqualityFn } from "zustand/traditional";
import { handleError } from "@/api/api";

type AuthStore = {
    user: AuthTypes.User | null;
    isAuthenticated: boolean;
    isHost: boolean;
    loading: boolean;
    error: { message: string; statusCode: number } | null;
    info: string;

    register: (userRegister: AuthTypes.RegisterRequest) => Promise<void>;
    login: (userLogIn: AuthTypes.LogInRequest) => Promise<void>;
    logout: () => void;
    verifyOTP: (userOTPVerify: AuthTypes.OTPVerifyRequest) => Promise<void>;
};

export const useAuthStore = createWithEqualityFn<AuthStore>((set, get) => ({

    user: null, isAuthenticated: false, isHost: false, loading: false, error: null, info: "",

    register: async (userRegister) => {
        set({ loading: true, error: null });
        try {
            await auth.register(userRegister);
        } catch (error) {
            set({ error: handleError(error) });
        } finally { set({ loading: false }) }
    },

    login: async (userLogIn) => {
        set({ loading: true, error: null });
        try {
            const response = await auth.login(userLogIn);
            set({ user: response.user, isAuthenticated: true, isHost: response.isHost });
        } catch (error) {
            const err = handleError(error);
            if (err.statusCode === 403) {
                set({ error: { message: "User is banned", statusCode: 403 } });
            } else {
                set({ error: err });
            }
        } finally { set({ loading: false }) }
    },

    logout: () => {
        set({ loading: true, error: null });
        try{
            auth.logout();
        } catch (error) {
            set({ error: handleError(error) });
        } finally { set({ isAuthenticated: false, isHost: false, loading: false, user: null }) }
    },

    verifyOTP: async (userOTPVerify) => {
        set({ loading: true, error: null });
        try {
            const response = await auth.verifyOTP(userOTPVerify);
            set({ user: response.user, isAuthenticated: true, isHost: response.isHost });
        } catch (error) {
            set({ error: handleError(error) });
        } finally { set({ loading: false }) }
    },


}));
