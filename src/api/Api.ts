import axios, {
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Axios instance
const api = axios.create({
  baseURL: API_URL,
  timeout: 16000,
  withCredentials: true,
});

// Custom navigation using history
const history = createBrowserHistory();

// Zustand store for managing authentication
interface AuthState {
  accessToken: string | null;
  expiry: string | null;
  setAccessToken: (token: string) => void;
  setExpiry: (expiry: string) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      expiry: null,
      setAccessToken: (token: string) => set({ accessToken: token }),
      setExpiry: (expiry: string) => set({ expiry }),
      clearAuth: () => set({ accessToken: null, expiry: null }),
    }),
    { name: 'auth-store' }
  )
);

// Retry logic configuration
const MAX_RETRIES = 3;

// Attach tokens to requests
api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const { accessToken, expiry } = useAuthStore.getState();
    const csrfToken = getCookie('csrftoken') as string;

    if (accessToken && expiry && new Date(expiry) > new Date()) {
      config.headers.set('Authorization', `Bearer ${accessToken}`);
    }

    if (csrfToken) {
      config.headers.set('X-CSRFToken', csrfToken);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Refresh token and handle errors with retry logic
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _isRetry?: boolean;
      _retryCount?: number;
    };

    if (error.response?.status === 401 && originalRequest) {
      originalRequest._isRetry = originalRequest._isRetry || false;
      originalRequest._retryCount = originalRequest._retryCount || 0;

      if (originalRequest._isRetry || originalRequest._retryCount >= MAX_RETRIES) {
        useAuthStore.getState().clearAuth();
        history.push('/login');
        return Promise.reject(error);
      }

      originalRequest._isRetry = true;
      originalRequest._retryCount += 1;

      try {
        const csrfToken = getCookie('csrftoken') as string;

        const response = await axios.post(
          `${API_URL}/auth/jwt/refresh/`,
          {},
          {
            withCredentials: true,
            headers: {
              'X-CSRFToken': csrfToken,
            },
          }
        );

        const { access: newAccessToken, expiry: newExpiry } = response.data;

        if (newAccessToken && newExpiry) {
          useAuthStore.getState().setAccessToken(newAccessToken);
          useAuthStore.getState().setExpiry(newExpiry);

          // Retry original request with the new access token
          originalRequest.headers = {
            ...originalRequest.headers,
            Authorization: `Bearer ${newAccessToken}`,
          };
          return api.request(originalRequest);
        }
      } catch (refreshError) {
        console.error(
          `Error refreshing token (attempt ${originalRequest._retryCount}):`,
          refreshError
        );

        if (originalRequest._retryCount >= MAX_RETRIES) {
          useAuthStore.getState().clearAuth();
          history.push('/login');
        }
      }
    }

    return Promise.reject(error);
  }
);

export default api;
