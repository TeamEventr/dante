import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { useAuthStore } from "../utils/Store";
import { API_ENDPOINTS } from "./endpoints";

const API_URL = import.meta.env.API_URL;

export const api = axios.create({
    baseURL: API_URL,
    timeout: 16000,
    withCredentials: true,
});

const MAX_RETRIES = 3;

// Request Interceptor not needed as access and refresh tokens are in cookies
// api.interceptors.request.use(
// (config: InternalAxiosRequestConfig) => {
//     const { isAuthenticated, isHost } = useAuthStore.getState();

//     if (accessToken && expiry && new Date(expiry) > new Date()) {
//     config.headers.Authorization = `Bearer ${accessToken}`;
//     }

//     if (csrfToken) {
//     config.headers["X-CSRFToken"] = csrfToken;
//     }

//     return config;
// },
// (error) => Promise.reject(error)
// );

// Response Interceptor
api.interceptors.response.use((response: AxiosResponse) => response,
    async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
        _isRetry?: boolean;
        _retryCount?: number;
    };

    if (error.response?.status === 401 && originalRequest) {
        originalRequest._retryCount = originalRequest._retryCount || 0;

        if (originalRequest._retryCount >= MAX_RETRIES) {
            useAuthStore.getState().clearAuth();
            window.location.href = "/login";
            return Promise.reject(error);
        }

        if (!originalRequest._isRetry) {
            originalRequest._isRetry = true;
            originalRequest._retryCount += 1;

            try {
            await axios.post(
                API_ENDPOINTS.REFRESH, {}, {
                withCredentials: true,
                });

          // if (newAccessToken && newExpiry) {
          //     useAuthStore.getState().setAccessToken(newAccessToken);
          //     useAuthStore.getState().setExpiry(newExpiry);

          //     originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          //     return api.request(originalRequest);
          // }
        } catch (refreshError) {
          console.error("Failed to refresh token:", refreshError);
          useAuthStore.getState().clearAuth();
          window.location.href = "/login";
          return Promise.reject(refreshError);
        }}}

    return Promise.reject(error);
  }
);
