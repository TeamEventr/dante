export namespace AuthTypes {
    export type User = {
        username: string;
        email: string;
        firstName: string;
        middleName: string;
        lastName: string;
        profilePictureURL: string;
    }

    
    export type LogInRequest = {
        username: string;
        password: string;
    };

    export type LogInResponse = {
        message: string;
        user: User;
        isHost: boolean;
    };
    export type RegisterRequest = {
        email: string;
        password: string;
        username: string;
    };

    export type RegisterResponse = {
        email: string;
        message: string;
        username: string;
    };

    export type OTPVerifyRequest = {
        otp: string;
    };

    export type OTPResendRequest = {
        username: string;
        email: string;
    };

    export type OTPResendResponse = {
        user: User;
    };

    export type GoogleAuthResponse = {
        message: string;
        username: string;
        token: string;
        email: string;
        firstName: string;
        middleName: string;
        lastName: string;
        profilePictureURL: string;
    };

    export type HostRegisterRequest = {
        username: string;
        firstName: string;
        middleName?: string;
        lastName: string;
        phoneNumber: string;
        dob: Date | null;
        companyMail: string;
        backupMail: string;
        companyName: string;
        registered: boolean;
        hostedStatus: string;
    };

    export type HostRegisterResponse = {
        message: string;
        username: string;
        companyMail: string;
        expiryAt: string;
    };

    export type HostOTPVerifyRequest = {
        username: string;
        companyMail: string;
        otp: string;
    };

    export type HostOTPResendRequest = {
        username: string;
        companyMail: string;
    };

    export type HostOTPResendResponse = {
        message: string;
        username: string;
        companyMail: string;
        expiryAt: string;
    };
}

export type EventList = {
    id: string;
    title: string;
    coverPictureUrl: string;
    bannerUrl: string;
    venue: string;
    startTime: string;
};