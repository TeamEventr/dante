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

export const handleError = (error: unknown): never => {
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
};