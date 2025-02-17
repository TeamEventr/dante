import { auth } from "@/api/auth";
import { AuthTypes } from "@/lib/types";
import { createWithEqualityFn } from "zustand/traditional";
import { handleError } from "@/api/api";
import { create } from "zustand";


type AuthStore = {
    user: AuthTypes.User | null;
    isAuthenticated: boolean | null;
    isHost: boolean;
    loading: boolean;
    error: { message: string; statusCode: number } | null;
    info: string;

    register: (userRegister: AuthTypes.RegisterRequest) => Promise<boolean>;
    verifyOTP: (userOTPVerify: AuthTypes.OTPVerifyRequest) => Promise<void>;
    login: (userLogIn: AuthTypes.LogInRequest) => Promise<void>;
    logout: () => void;
    session: () => Promise<void>;
};

export const useAuthStore = createWithEqualityFn<AuthStore>((set) => ({

    user: null, isAuthenticated: null, isHost: false, loading: false, error: null, info: "",

    register: async (userRegister) => {
        set({ loading: true, error: null });
        try {
            auth.register(userRegister);
            return true;
        } catch (error) {
            set({ error: handleError(error) });
            return false;
        } finally { set({ loading: false }) }
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

    session: async () => {
        set({ loading: true, error: null });
        try {
            const response = await auth.session();
            set({ user: response.user, isAuthenticated: true, isHost: response.isHost });
        } catch (error) {
            set({ error: handleError(error) });
            throw error;
        } finally { set({ loading: false }) }
    },
}));

type RegisterPageStore = {
    step: "register" | "otp" | "success";
    err: string | null;
    password: string;
    email: string;
    confirmPassword: string;

    setStep: (step: "register" | "otp" | "success") => void;
    setErr: (err: string | null) => void;
    setPassword: (password: string) => void;
    setEmail: (email: string) => void;
    setConfirmPassword: (confirmPassword: string) => void;
};

export const useRegisterPageStore = create<RegisterPageStore>((set) => ({
    step: "register",
    err: null,
    password: "",
    email: "",
    confirmPassword: "",
    setStep: (step) => set((state) => (state.step !== step ? { step } : state)),
    setErr: (err: string | null) => set({ err }),
    setPassword: (password: string) => set({ password }),
    setEmail: (email: string) => set({ email }),
    setConfirmPassword: (confirmPassword: string) => set({ confirmPassword }),
}));