import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom'; // For navigation

const API_URL = import.meta.env.API_URL;

const api = axios.create({
  baseURL: API_URL,
  timeout: 16000,
  withCredentials: true,
});


// Intercept requests to attach tokens
api.interceptors.request.use(async (config) => {
  const { accessToken, expiry } = useAuthStore.getState();
  const csrfToken = "getCookie('csrftoken');" // Change this later
  
  if (accessToken && new Date(expiry) > new Date()) {
    config.headers.set('Authorization', `Bearer ${accessToken}`);
  }

  if (csrfToken) {
    config.headers.set('X-CSRFToken', csrfToken as string);
  }

  return config;
  },
  (error) => {
    return Promise.reject(error)
  }
);

// Handle response errors, refresh token logic, and authentication failures
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & { _isRetry?: boolean };
    const navigate = useNavigate();

    if (error.response?.status === 401 && originalRequest && !originalRequest._isRetry) {
      originalRequest._isRetry = true;

      try {
        const csrfToken = getCookie('csrftoken');
        const response = await axios.post(
          `${API_URL}/auth/jwt/refresh/`,
          {},
          {
            withCredentials: true,
            headers: {
              'X-CSRFToken': csrfToken as string,
            },
          }
        );

        const newAccessToken = response.data?.access;
        if (newAccessToken) {
          useAuthStore.getState().setAccessToken(newAccessToken);

          // Retry original request with the new access token
          originalRequest.headers = {
            ...originalRequest.headers,
            Authorization: `Bearer ${newAccessToken}`,
          };
          return api.request(originalRequest);
        }
      } catch (refreshError) {
        console.error('Error refreshing access token:', refreshError);
        useAuthStore.getState().clearAuth();
        navigate('/login'); // Redirect to login on failure
      }
    }

    return Promise.reject(error);
  }
);

// Authentication functions
export const authAPI = {
  login: async (email: string, password: string) => {
    const csrfToken = getCookie('csrftoken');
    const response = await api.post(
      '/auth/login/',
      { email, password },
      {
        headers: { 'X-CSRFToken': csrfToken as string },
      }
    );
    const { access } = response.data;
    useAuthStore.getState().setAccessToken(access);
  },

  logout: async () => {
    const csrfToken = getCookie('csrftoken');
    await api.post(
      '/auth/logout/',
      {},
      {
        headers: { 'X-CSRFToken': csrfToken as string },
      }
    );
    useAuthStore.getState().clearAuth();
  },

  createAccount: async (email: string, password: string) => {
    const response = await api.post('/auth/register/', { email, password });
    return response.data;
  },

  fetchData: async (endpoint: string) => {
    const response = await api.get(endpoint);
    return response.data;
  },
};

export default api;
