import { API_ENDPOINTS } from "./endpoints";
import { AuthTypes } from "@/lib/types";
import { Ky } from "./api";
import { HTTPError, TimeoutError } from "ky";

export const auth = {

    async login(userLogIn: AuthTypes.LogInRequest) {
        const response = await Ky.post(API_ENDPOINTS.USER_LOGIN, {
            json: userLogIn,
        }).json<AuthTypes.LogInResponse>();
        return response;
    },

    async logout() {
        await Ky.get(API_ENDPOINTS.USER_LOGOUT);
    },

    async session() {
        const response = await Ky.get(API_ENDPOINTS.USER_SESSION).json<AuthTypes.LogInResponse>();
        return response;
    },

    async register(userRegister: AuthTypes.RegisterRequest) {
        const response = await Ky.post(API_ENDPOINTS.USER_SIGNUP, {
            json: userRegister,
        }).json<AuthTypes.RegisterResponse>();
        return response;
        
    },

    async verifyOTP(userOTPVerify: AuthTypes.OTPVerifyRequest) {
        const response = await Ky.post(API_ENDPOINTS.USER_OTP_VERIFY, {
            json: userOTPVerify
        }).json<AuthTypes.LogInResponse>();
        return response
    },

    

    async resendUserOTP(userOTPResend: AuthTypes.OTPResendRequest) {
        await Ky.post(API_ENDPOINTS.USER_OTP_RESEND, {
            json: userOTPResend
        }).json<AuthTypes.OTPResendResponse>();
        return "Resend Successful";
    },



    async checkUserName(username: string) {
        try {
            const response = await Ky.post(API_ENDPOINTS.USERNAME_CHECK, {
            json: { username: username },
            }).json<{ available: boolean, message: string }>();
            return response.available;
        } catch (error) {
            if (error instanceof HTTPError) {
                if (error.response.status === 403) {
                    throw new Error("Forbidden");
                } else if (error.response.status === 302) {
                    throw new Error("Redirect");
                } else {
                    throw new Error(error.message || "Bad Request");
                }
            } else if (error instanceof TimeoutError) {
                throw new Error('Request timed out.');
            } else {
            throw new Error("An unexpected error occurred.");
            }
        }
    },
                    
    async googleAuth () {
        try {
            const response = await Ky.get(API_ENDPOINTS.GOOGLE_AUTH, {
            }).json<AuthTypes.GoogleAuthResponse>();
            if(response.username == "User has been banned") {
                throw new Error('User has been banned');
            }
            return response;
        } catch (error) {
            if (error instanceof HTTPError) {
                if (error.response.status === 403) {
                    throw new Error("Forbidden");
                } else if (error.response.status === 302) {
                    throw new Error("Redirect");
                } else {
                    throw new Error(error.message || "Bad Request");
                }
            } else if (error instanceof TimeoutError) {
                throw new Error('Request timed out.');
            } else {
            throw new Error("An unexpected error occurred.");
            }
        }
    },

    async hostRegister(hostRegister: AuthTypes.HostRegisterRequest) {
        try {
            await Ky.post(API_ENDPOINTS.HOST_SIGNUP,
                {
                json: hostRegister,
            }).json<AuthTypes.HostRegisterResponse>();
        } catch (error) {
            if (error instanceof HTTPError) {
                if (error.response.status === 403) {
                    throw new Error("Forbidden");
                } else if (error.response.status === 302) {
                    throw new Error("Redirect");
                } else {
                    throw new Error(error.message || "Bad Request");
                }
            } else if (error instanceof TimeoutError) {
                throw new Error('Request timed out.');
            } else {
            throw new Error("An unexpected error occurred.");
            }
        }
    },

    async verifyHostOTP(hostOTPVerify: AuthTypes.HostOTPVerifyRequest) {
        try {
            const response = await Ky.post(API_ENDPOINTS.HOST_OTP_VERIFY, {
                json: hostOTPVerify,
            }).json();
            return response;
        } catch (error) {
            if (error instanceof HTTPError) {
                if (error.response.status === 403) {
                    throw new Error("Forbidden");
                } else if (error.response.status === 302) {
                    throw new Error("Redirect");
                } else {
                    throw new Error(error.message || "Bad Request");
                }
            } else if (error instanceof TimeoutError) {
                throw new Error('Request timed out.');
            } else {
            throw new Error("An unexpected error occurred.");
            }
        }
    },

    async resendHostOTP(hostOTPResend: AuthTypes.HostOTPResendRequest) {
        try {
            await Ky.post(API_ENDPOINTS.HOST_OTP_RESEND, {
                json: hostOTPResend,
            }).json<AuthTypes.HostOTPResendResponse>();
            return "Resend Successful";
        } catch (error) {
            if (error instanceof HTTPError) {
                if (error.response.status === 403) {
                    throw new Error("Forbidden");
                } else if (error.response.status === 302) {
                    throw new Error("Redirect");
                } else {
                    throw new Error(error.message || "Bad Request");
                }
            } else if (error instanceof TimeoutError) {
                throw new Error('Request timed out.');
            } else {
            throw new Error("An unexpected error occurred.");
            }
        }
    },
}