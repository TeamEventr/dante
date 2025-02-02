import ky, { HTTPError, TimeoutError } from "ky";

export const Ky = ky.extend({
    credentials: 'include',
    hooks: {
        beforeRequest: [],
        beforeError: [],
    },
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 6000,
});

export const handleError = (error: unknown) => {
    if (error instanceof HTTPError) {
        return { message: error.message || "Bad Request", statusCode: error.response.status };
    } else if (error instanceof TimeoutError) {
        return { message: "Request timed out.", statusCode: 408 };
    } else {
        return { message: "An unexpected error occurred.", statusCode: 500 };
    }
};
