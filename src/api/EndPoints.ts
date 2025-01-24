const API_SERVER = import.meta.env.API_SERVER

export const API_ENDPOINTS = {
    REFRESH: `${API_SERVER}/auth/jwt/refresh`,

    USERNAME_CHECK: `${API_SERVER}/user/check/username`,
    USER_SIGNUP: `${API_SERVER}/user/register`,
    HOST_SIGNUP: `${API_SERVER}/host/register`,
    GOOGLE_AUTH: `${API_SERVER}/user/google/auth`,
    USER_OTP_VERIFY: `${API_SERVER}/user/register/otp/verify`,
    HOST_OTP_VERIFY: `${API_SERVER}/host/register/otp/verify`,
    USER_OTP_RESEND: `${API_SERVER}/user/register/otp/resend`,
    HOST_OTP_RESEND: `${API_SERVER}/host/register/otp/resend`,

    USER_LOGIN: `${API_SERVER}/user/login`,
    USER_LOGOUT: `${API_SERVER}/user/logout`,

    USERNAME_UPDATE: `${API_SERVER}/user/update/username`,
    GET_EVENTS_LIST_HOME: '',
    GET_TOP_TWO_TICKETS: ''
};