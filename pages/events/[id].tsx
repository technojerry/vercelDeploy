// [id].tsx
import React from 'react';
import { useRouter } from 'next/router';
import EventDetails from './EventDetails'; // Adjust the path accordingly
import { EventData, useEvent } from './context/EventContext';

const EventDetailsPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;

    // Use your context or API to fetch event data based on the id
    const { events } = useEvent();
    const selectedEvent = events.find((event) => event._id === id);

    // Render loading or error state if eventData is not available
    if (!selectedEvent) {
        return <div>Loading...</div>; // You can replace this with an error message or loading spinner
    }

    return <EventDetails data={selectedEvent} />;
};

export default EventDetailsPage;
