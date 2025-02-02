import { API_ENDPOINTS } from "./endpoints";
import { EventList } from "@/lib/types";
import { Ky } from "./api";
import { HTTPError,TimeoutError } from "ky";

export const client = {

    //Explore
    async getEventsExplore() {
        try {
            const response = await Ky.get(API_ENDPOINTS.GET_EVENTS_EXPLORE).json<EventList[]>();
            return response;
        } catch (error) {
            if (error instanceof HTTPError) {
                throw new Error(error.message || "Bad Request");
            } else if (error instanceof TimeoutError) {
                throw new Error('Request timed out.');
            } else {
                throw new Error("An unexpected error occurred.");
        }}},
}

