import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { EventData } from './context/EventContext';

interface FilterationProps {
    onFilter: (filterCriteria: { lookingFor: string; inPlace: string; selectedDate: string }) => void;
    allEvents: EventData[]; // Provide the list of all events
}

const Filteration: React.FC<FilterationProps> = ({ onFilter, allEvents }) => {
    const [lookingFor, setLookingFor] = useState('');
    const [inPlace, setInPlace] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [showEvents, setShowEvents] = useState(false);
    const [dateOptions, setDateOptions] = useState<{ value: string; label: string }[]>([]);

    useEffect(() => {
        // Generate date options dynamically for the next 5 days
        const today = new Date();
        const options: { value: string; label: string }[] = [];

        for (let i = 0; i < 5; i++) {
            const currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);
            const formattedDate = currentDate.toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            });

            options.push({
                value: formattedDate,
                label: formattedDate,
            });
        }

        setDateOptions(options);
    }, []);

    const handleFilter = () => {
        if (!lookingFor && !inPlace && !selectedDate) {
            setShowEvents(false);
            alert('Please enter at least one filter criteria');
            return;
        }

        // Filter events based on criteria
        const filteredEvents = allEvents.filter((event) => {
            const titleMatch = event.title.toLowerCase().includes(lookingFor.toLowerCase());
            const placeMatch = event.venue.toLowerCase().includes(inPlace.toLowerCase());
            const dateMatch = selectedDate ? event.dayOfEvent === selectedDate : true;

            return titleMatch && placeMatch && dateMatch;
        });

        // Call the onFilter callback with the filtered events
        onFilter({ lookingFor, inPlace, selectedDate });

        // Optionally, you can store or update the filtered events in the component state
        setShowEvents(true);
        // Update state or perform any other actions with filteredEvents
        console.log('Filtered events:', filteredEvents);
    };

    return (
        <div className="rounded-xl lg:h-2/4 flex-col md:flex-row md:flex justify-between items-end lg:gap-4 p-2">
            <div className="flex-col sm:flex sm:flex-row gap-3">
                <div className="looking_for md:mb-3 mb-1 lg:mb-0 text-white">
                    <p className="text-sm">Looking For</p>
                    <input
                        type="text"
                        placeholder="eg.. Event Title"
                        className="w-56 outline-none border-b-2 bg-transparent text-sm border-purple-600 p-2"
                        value={lookingFor}
                        onChange={(e) => setLookingFor(e.target.value)}
                    />
                </div>
                <div className="in_place mb-1 md:mb-3 lg:mb-0 text-white">
                    <p className="text-sm">In</p>
                    <input
                        type="text"
                        placeholder="eg., Venue"
                        className="w-56 outline-none text-sm border-b-2 bg-transparent border-purple-600 p-2"
                        value={inPlace}
                        onChange={(e) => setInPlace(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex-col sm:flex sm:flex-row items-start justify-start gap-3">
                <div className="date mb-1 md:mb-3 lg:mb-0 text-white">
                    <p className="text-sm">Date</p>
                    <select
                        name="Dates"
                        id="date"
                        className=" text-sm w-56 outline-none bg-transparent border-b-2 p-2 border-purple-600"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    >
                        <option className="outline-none text-black border-b-2 border-purple-600" value="">
                            Select Date
                        </option>
                        {dateOptions.map((option) => (
                            <option key={option.value} className="outline-none text-black border-b-2" value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="search flex justify-center">
                    <div className="search_icon flex items-normal items-center mt-4 gap-2 hover:cursor-pointer lg:mb-0 bg-purple-600 rounded-xl px-3 py-2">
                        <span className=' text-white font-semibold text-lg md:hidden'>Search</span>
                        <FaSearch size={20} color={'white'} className="cursor-pointer" onClick={handleFilter} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Filteration;
