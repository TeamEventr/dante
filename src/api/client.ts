import { api } from "./api";
import { EventList } from "@/lib/types";
import { AxiosError } from "axios";
import { API_ENDPOINTS } from "./endpoints";

export const client = {
    async getExploreEvents() {
        try {
            const { data } = await api.get<EventList[]>(API_ENDPOINTS.GET_EVENTS_LIST_EXPLORE);
            return data;
        } catch (error) {
            const err = error as AxiosError;
            console.error("Error fetching events:", err.message);
            throw new Error("Failed to fetch events");
        }
    }
};
