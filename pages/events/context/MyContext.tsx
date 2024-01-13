import React, { createContext, useContext, useState, useEffect } from 'react';
import eventData from '../api/Events.postman_collection.json';

interface EventData {
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
}

interface APIContextProps {
    events: EventData[];
    setEvents: React.Dispatch<React.SetStateAction<EventData[]>>;
}

const APIContext = createContext<APIContextProps | undefined>(undefined);

export const APIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [events, setEvents] = useState<EventData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = eventData.item[1]?.response;
                if (!response) {
                    throw new Error('Invalid response format');
                }

                const newEvents = response.map((index) => {
                    const parsedData = JSON.parse(index.body);
                    return parsedData?.data?.documents;
                });

                if (newEvents) {
                    setEvents(newEvents.flat());
                } else {
                    throw new Error('Invalid data format');
                }
            } catch (error) {
                console.error('Error fetching events:', error);
                // You can display a user-friendly error message or take alternative action here
            }
        };

        fetchData();
    }, []);

    return <APIContext.Provider value={{ events, setEvents }}>{children}</APIContext.Provider>;
};

export const useAPI = () => {
    const context = useContext(APIContext);
    if (!context || !context.events) {
        throw new Error('useAPI must be used within an APIProvider');
    }
    return context;
};
