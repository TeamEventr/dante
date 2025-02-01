import { useQuery } from "@tanstack/react-query";
import { client } from "./client";
import { EventList } from "@/lib/types";

export const useExploreEvents = () => {
    return useQuery<EventList[]>({
        queryKey: ["explore", "events"],
        queryFn: () => client.getExploreEvents(),
        staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
        retry: 2, // Retry failed requests twice
        refetchOnWindowFocus: false, // Avoid unnecessary re-fetching when switching tabs
    });
};
