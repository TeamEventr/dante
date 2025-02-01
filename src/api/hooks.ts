import { useQuery } from "@tanstack/react-query";
import { client } from "./client";
import { EventList } from "@/lib/types";

export const useEventsExplore = () =>
    useQuery<EventList[]>({
        queryKey: ["explore", "events"],
        queryFn: client.getEventsExplore,
    });
