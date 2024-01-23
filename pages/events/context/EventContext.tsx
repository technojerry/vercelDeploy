// EventContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import eventData from "../api/Events.postman_collection.json";

//We defined the eventData interface here
export interface EventData {
    _id: string;
    eventType: string;
    link: string;
    venue: string;
    title: string;
    description: string;
    dayOfEvent: string;
    image: string;
    eventTiming: string;
    lastDateToRegister: string;
    fees: string;
    singleEvent: {};
    isSingleLoading: false;
}

interface EventContextProps {
    events: EventData[];
}

const EventContext = createContext<EventContextProps | undefined>(undefined);

interface EventProviderProps {
    children: ReactNode;
}

const EventProvider: React.FC<EventProviderProps> = ({ children }) => {
    const [events, setEvents] = useState<EventData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = eventData.item[1].response;
                const parsedEvents = response.map((index) => {
                    const newREs = JSON.parse(index.body);
                    return newREs.data.documents;
                });

                setEvents(parsedEvents.flat());
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <EventContext.Provider value={{ events }}>
            {children}
        </EventContext.Provider>
    );
};

export default EventProvider;

export const useEvent = () => {
    const context = useContext(EventContext);
    if (!context) {
        throw new Error("useEvent must be used within an EventProvider");
    }
    return context;
};
