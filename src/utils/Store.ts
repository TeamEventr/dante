import { auth } from "@/api/auth";
import { AuthTypes } from "@/lib/types";
import { createWithEqualityFn } from "zustand/traditional";
import { handleError } from "@/api/api";
import { create } from "zustand";

// Auth Store
type AuthStore = {
    user: AuthTypes.User | null;
    isAuthenticated: boolean | null;
    isHost: boolean;
    loading: boolean;
    loginModal: boolean;
    registerModal: boolean;
    error: { message: string; statusCode: number } | null;
    info: string;
    setLoginModal: (open: boolean) => void;
    setRegisterModal: (open: boolean) => void;
    register: (userRegister: AuthTypes.RegisterRequest) => Promise<void>;
    verifyOTP: (userOTPVerify: AuthTypes.OTPVerifyRequest) => Promise<void>;
    login: (userLogIn: AuthTypes.LogInRequest) => Promise<void>;
    logout: () => void;
    session: () => Promise<void>;
};

export const useAuthStore = createWithEqualityFn<AuthStore>((set) => ({
    user: null,
    loginModal: false,
    registerModal: false,
    isAuthenticated: null,
    isHost: false,
    loading: false,
    error: null,
    info: "",

    setLoginModal: (open) => set({ loginModal: open }),
    setRegisterModal: (open) => set({ registerModal: open }),

    register: async (userRegister) => {
        set({ loading: true, error: null });
        try {
            auth.register(userRegister);
        } catch (error) {
            set({ error: handleError(error) });
        } finally {
            set({ loading: false });
        }
    },

    verifyOTP: async (userOTPVerify) => {
        set({ loading: true, error: null });
        try {
            const response = await auth.verifyOTP(userOTPVerify);
            set({ user: response.user, isAuthenticated: true, isHost: response.isHost });
        } catch (error) {
            set({ error: handleError(error) });
        } finally {
            set({ loading: false });
        }
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
        } finally {
            set({ loading: false });
        }
    },

    logout: () => {
        set({ loading: true, error: null });
        try {
            auth.logout();
        } catch (error) {
            set({ error: handleError(error) });
        } finally {
            set({ isAuthenticated: false, isHost: false, loading: false, user: null });
        }
    },

    session: async () => {
        set({ loading: true, error: null });
        try {
            const response = await auth.session();
            set({ user: response.user, isAuthenticated: true, isHost: response.isHost });
        } catch (error) {
            set({ error: handleError(error) });
            throw error;
        } finally {
            set({ loading: false });
        }
    },
}));

// Register Page Store
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
    setErr: (err) => set({ err }),
    setPassword: (password) => set({ password }),
    setEmail: (email) => set({ email }),
    setConfirmPassword: (confirmPassword) => set({ confirmPassword }),
}));

// Event Store
type DateTime = {
    date: string;
    time: string;
};

type Gallery = {
    imageURL: string;
};

type PriceTier = {
    name: string;
    timeSlot: Date;
    price: string;
    totalSeats: string;
};

type Artist = {
    userId: string;
    role: string;
};

type EventStore = {
    step: number;
    eventDuration: { value: string; unit: string };
    ticketInput: { start: DateTime; name: string; price: string; totalSeats: string };
    metadata: {
        title: string;
        description: string;
        tags: string[];
        category: string;
        venue: string;
        duration: string;
        ageLimit: string;
        bookingOpenTime: DateTime;
        bookingCloseTime: DateTime;
        priceTiers: PriceTier[];
        thumbnailURL: string;
        coverPictureURL: string;
        gallery: Gallery[];
        artists: Artist[];
    };
    setStep: (step: number) => void;
    setEventDuration: (value: string, unit: string) => void;
    setTicketInput: (ticket: Partial<EventStore["ticketInput"]>) => void;
    updateMetadata: (metadata: Partial<EventStore["metadata"]>) => void;
};

export const useEventStore = create<EventStore>((set) => ({
    step: 1,
    eventDuration: { value: "", unit: "" },
    ticketInput: { start: { date: "", time: "" }, name: "", price: "", totalSeats: "" },
    metadata: {
        title: "",
        description: "",
        tags: [],
        category: "",
        venue: "",
        duration: "",
        ageLimit: "",
        bookingOpenTime: { date: "", time: "" },
        bookingCloseTime: { date: "", time: "" },
        priceTiers: [],
        thumbnailURL: "",
        coverPictureURL: "",
        gallery: [],
        artists: [],
    },
    setStep: (step) => set({ step }),
    setEventDuration: (value, unit) => set({ eventDuration: { value, unit } }),
    setTicketInput: (ticket) => set((state) => ({ ticketInput: { ...state.ticketInput, ...ticket } })),
    updateMetadata: (metadata) => set((state) => ({ metadata: { ...state.metadata, ...metadata } })),
}));