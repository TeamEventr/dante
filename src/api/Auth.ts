import { API_ENDPOINTS } from "./endpoints";
import { AuthTypes } from "@/lib/types";
import { Ky, handleError } from "./api";

export const auth = {

    async login(userLogIn: AuthTypes.LogInRequest) {
        try {
            const response = await Ky.post(API_ENDPOINTS.USER_LOGIN, {
                json: userLogIn,
            }).json<AuthTypes.LogInResponse>();
            return response;
        } catch (error) {
            handleError(error);
        }
    },

    async register(userRegister: AuthTypes.RegisterRequest) {
        try {
            const response = await Ky.post(API_ENDPOINTS.USER_SIGNUP, {
                json: userRegister,
            }).json<AuthTypes.RegisterResponse>();
            return response;
        } catch (error) {
            handleError(error);
        }
    },

    async verifyOTP(userOTPVerify: AuthTypes.OTPVerifyRequest) {
        try {
            const response = await Ky.post(API_ENDPOINTS.USER_OTP_VERIFY, {
                json: userOTPVerify
            }).json<AuthTypes.LogInResponse>();
            return response;
        } catch (error) {
            handleError(error);
        }
    },

    async resendUserOTP(userOTPResend: AuthTypes.OTPResendRequest) {
        try {
            await Ky.post(API_ENDPOINTS.USER_OTP_RESEND, {
                json: userOTPResend
            }).json<AuthTypes.OTPResendResponse>();
            return "Resend Successful";
        } catch (error) {
            handleError(error);
        }
    },

    async checkUserName(username: string) {
        try {
            const response = await Ky.post(API_ENDPOINTS.USERNAME_CHECK, {
            json: { username: username },
            }).json<{ available: boolean, message: string }>();
            return response.available;
        } catch (error) {
            handleError(error);
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
            handleError(error);
        }
    },

    async hostRegister(hostRegister: AuthTypes.HostRegisterRequest) {
        try {
            await Ky.post(API_ENDPOINTS.HOST_SIGNUP,
                {
                json: hostRegister,
            }).json<AuthTypes.HostRegisterResponse>();
        } catch (error) {
            handleError(error);
        }
    },

    async verifyHostOTP(hostOTPVerify: AuthTypes.HostOTPVerifyRequest) {
        try {
            const response = await Ky.post(API_ENDPOINTS.HOST_OTP_VERIFY, {
                json: hostOTPVerify,
            }).json();
            return response;
        } catch (error) {
            handleError(error);
        }
    },

    async resendHostOTP(hostOTPResend: AuthTypes.HostOTPResendRequest) {
        try {
            await Ky.post(API_ENDPOINTS.HOST_OTP_RESEND, {
                json: hostOTPResend,
            }).json<AuthTypes.HostOTPResendResponse>();
            return "Resend Successful";
        } catch (error) {
            handleError(error);
        }
    },
}