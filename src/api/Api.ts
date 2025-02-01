import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { useAuthStore } from "../utils/Store";
import { API_ENDPOINTS } from "./endpoints";

const API_URL = import.meta.env.VITE_API_URL; // Changed to VITE_API_URL for Vite projects

export const api = axios.create({
    baseURL: API_URL,
    timeout: 16000,
    withCredentials: true,
});

const MAX_RETRIES = 3;

api.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & {
            _isRetry?: boolean;
            _retryCount?: number;
        };

        if (error.response?.status === 401 && originalRequest) {
            originalRequest._retryCount = (originalRequest._retryCount || 0) + 1;

            if (originalRequest._retryCount > MAX_RETRIES) {
                useAuthStore.getState().clearAuth();
                window.location.href = "/login";
                return Promise.reject(error);
            }

            if (!originalRequest._isRetry) {
                originalRequest._isRetry = true;
                
                try {
                    const response = await axios.post(
                        API_ENDPOINTS.REFRESH,
                        {},
                        { withCredentials: true }
                    );

                    // Handle the refresh token response
                    const { accessToken, expiry } = response.data;
                    if (accessToken && expiry) {
                        // useAuthStore.getState().setAccessToken(accessToken);
                        // useAuthStore.getState().setExpiry(expiry);
                        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                        return api.request(originalRequest);
                    }
                } catch (refreshError) {
                    console.error("Failed to refresh token:", refreshError);
                    useAuthStore.getState().clearAuth();
                    window.location.href = "/login";
                    return Promise.reject(refreshError);
                }
            }
        }
        return Promise.reject(error);
    }
);